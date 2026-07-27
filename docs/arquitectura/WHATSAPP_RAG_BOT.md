# Arquitectura e Implementación: Bot de WhatsApp Business con RAG Local (On-Premise)

Este documento detalla la metodología, arquitectura y los pasos de implementación para construir un **Asistente Virtual (Bot) para WhatsApp Business** impulsado por un sistema de **Generación Aumentada por Recuperación (RAG) 100% Local**. 

El objetivo es automatizar la gestión de clientes, actuar como un embudo de conversión para ventas High-Ticket (como los servicios de HPC Builder y consultorías), y mantener la **soberanía tecnológica y privacidad de datos** ejecutando la inteligencia artificial directamente en el hardware local.

---

## 1. Visión General del Sistema

El ecosistema se divide en tres componentes principales:

1.  **El Puente (Interfaz de WhatsApp):** El mecanismo de conexión entre WhatsApp y nuestro servidor local.
2.  **El Cerebro (LLM + GPU Local):** El modelo de lenguaje ejecutándose en la GPU (NVIDIA GTX 1050 Ti).
3.  **La Memoria (RAG Pipeline):** La base de datos vectorial que contiene el contexto de negocio (catálogos, precios, manuales de marca) para evitar "alucinaciones".

---

## 2. Restricciones y Capacidades de Hardware (El "Hierro")

El sistema se desplegará sobre la infraestructura existente:
*   **SO:** Debian GNU/Linux (Entorno Híbrido).
*   **GPU:** NVIDIA GeForce GTX 1050 Ti (4GB VRAM).

**⚠️ Implicaciones de la GTX 1050 Ti:**
Tener 4GB de VRAM limita el tamaño de los modelos que podemos cargar íntegramente en la memoria de la tarjeta de video para obtener inferencia ultra-rápida. 
*   **Modelos Recomendados (Cuantizados):** Debemos usar modelos cuantizados en formato `.gguf` (4-bit o 5-bit). 
    *   *Gemma-2b-it-GGUF* o *Qwen1.5-1.8B-Chat* (Modelos pequeños, ágiles e ideales para 4GB de VRAM).
    *   *Llama-3-8B-Instruct-Q4_K_M* (Puede requerir offloading mixto CPU/GPU si el contexto es muy grande).
*   **Motor de Inferencia:** Usaremos **Ollama** o **llama.cpp** directamente, ya que optimizan dinámicamente qué capas van a la VRAM y cuáles a la RAM del sistema.

---

## 3. Metodología de Implementación (Paso a Paso)

### FASE 1: Construcción de "La Memoria" (RAG Local)

El modelo de lenguaje (LLM) es el motor, pero el RAG es el combustible. Necesitamos que el bot conozca tus servicios, tu tono de voz y tus precios.

1.  **Recolección de Datos (Knowledge Base):**
    *   Crear un directorio `knowledge_base/` en el servidor.
    *   Volcar archivos Markdown (`.md`), PDF y JSON (como el `hpc_catalog_mock.json` que usa el Frontend).
    *   Redactar un "Manual de Objeciones y Cierres de Venta" en texto plano.

2.  **Vectorización (Embeddings):**
    *   Se utiliza un modelo de embeddings ligero (ej. `nomic-embed-text` vía Ollama).
    *   **Framework:** **LangChain** o **LlamaIndex** en Python.
    *   El código leerá los archivos de `knowledge_base/`, los dividirá en "chunks" (fragmentos) y los guardará en una Base de Datos Vectorial local (ej. **ChromaDB** o **FAISS**).

### FASE 2: Despliegue de "El Cerebro" (LLM Local)

1.  **Instalación de Ollama:**
    *   Ejecutar en el servidor: `curl -fsSL https://ollama.com/install.sh | sh`
2.  **Descarga del Modelo:**
    *   `ollama run gemma:2b` (o el modelo cuantizado seleccionado).
3.  **API Local:**
    *   Ollama expone automáticamente una API REST en `http://localhost:11434`.

### FASE 3: "El Puente" (Conexión con WhatsApp)

Existen dos vías. Para un ecosistema soberano y sin dependencias corporativas, la Vía B suele ser la preferida por hackers éticos, aunque la Vía A es la "legal".

#### Vía A: WhatsApp Cloud API (Oficial - Recomendada para Negocios Escala)
*   **Ventajas:** Estable, no te banean el número, soporte oficial.
*   **Desventajas:** Requiere cuenta en Meta Developers, verificación de negocio.
*   **Implementación:** 
    *   Se crea un Webhook en Python (Flask o FastAPI).
    *   Meta envía un POST a tu servidor cuando entra un mensaje.
    *   Tu servidor responde enviando un POST a la API de Meta.
    *   *Nota:* Para esto, tu servidor local debe estar expuesto a internet de forma segura (ej. usando un túnel de **Cloudflare Tunnel**, **Tailscale**, o **Ngrok** configurado hacia tu red Mesh).

#### Vía B: WhatsApp-Web.js o Baileys (Soberanía Pura - Puppeteer/WebSocket)
*   **Ventajas:** Gratis, funciona escaneando un código QR desde la terminal (igual que WhatsApp Web), no requiere Meta Developers.
*   **Desventajas:** Si envías spam masivo, WhatsApp puede bloquear el número. (Como será de atención al cliente inbound, el riesgo es bajo).
*   **Implementación:**
    *   Crear un servicio en **Node.js**.
    *   Librería: `whatsapp-web.js`.
    *   Al recibir un mensaje, el servicio Node.js hace una petición HTTP GET/POST a tu API de Python (donde vive el RAG).

### FASE 4: El Agente Orchestador (Lógica de Ventas y Handoff)

El bot no debe ser un simple ChatGPT de charla libre. Debe ser un **Agente de Estados (State Machine)**.

1.  **Filtro Inicial (Triage):**
    *   Bot: *"Hola, soy el asistente virtual de IR Productions. ¿En qué puedo ayudarte? 1. Cotizar Equipo HPC. 2. Asesoría en IA Local. 3. Hablar con Lukas."*
2.  **Ejecución del RAG:**
    *   Si elige 1 o hace una pregunta, el servidor intercepta el mensaje.
    *   Se hace una búsqueda de similitud en ChromaDB.
    *   Se inyecta el contexto recuperado + el mensaje del cliente en un Prompt Estricto.
    *   *Prompt System:* "Eres el Closer de Ventas de IR Productions. Usa la siguiente información de inventario para responder al usuario. Sé conciso, profesional y persuasivo. Si el usuario pregunta algo fuera del contexto tecnológico, dile educadamente que solo manejas temas de sistemas."
3.  **Protocolo de Escalamiento (Human Handoff):**
    *   Si el RAG detecta intención de pago, palabras clave como "comprar", "transferencia", "asesoría directa", o si el usuario pide un humano.
    *   **Acción del Bot:** Envía un mensaje de espera: *"Entendido. Estoy transfiriendo tu caso directamente al Ingeniero en Jefe. Te responderá en breve por este medio."*
    *   **Acción de Backend:** Mutea al bot para ese número temporalmente y envía una notificación PUSH a tu dispositivo personal (Vía bot de Telegram privado o ntfy) diciendo: *"🚨 Lead Caliente en WhatsApp: [Número]. Intención: Cotización HPC"*.

---

## 4. Stack Tecnológico Resumido (El Pipeline)

*   **Recepción WPP:** Node.js (`whatsapp-web.js`)
*   **API Intermediaria:** Python (`FastAPI`)
*   **Motor LLM:** `Ollama` (Modelo: Gemma 2B o Qwen 1.5B 4-bit)
*   **Base Vectorial:** `ChromaDB` o `FAISS` (Local).
*   **Orquestación RAG:** `LangChain` (Python).
*   **Exposición Segura:** `Tailscale Funnel` o Servidor VPS proxy inverso.

---

## 5. Diseño del Agente Conversacional (Flujo de Código Pseudocódigo)

```python
# Pseudo-estructura del Backend (FastAPI + LangChain)

@app.post("/webhook/whatsapp")
async def receive_whatsapp_message(message_data: dict):
    user_phone = message_data.get('from')
    user_text = message_data.get('body')
    
    # 1. Chequear estado de Handoff
    if is_human_handoff(user_phone):
        return {"status": "ignored_by_bot"}
        
    # 2. Análisis de Intención (Clasificador Rápido)
    intent = classify_intent(user_text)
    
    if intent == "Hablar con Humano":
        activate_human_handoff(user_phone)
        send_telegram_alert(f"Atender a {user_phone}")
        return send_whatsapp_message(user_phone, "Te transferiré con Lukas.")
        
    # 3. Flujo RAG
    relevant_context = vector_db.similarity_search(user_text)
    
    # 4. Generación de Respuesta (Ollama Local API)
    prompt = f"""
    Eres un experto en HPC de IR Productions. 
    Contexto de nuestros servicios: {relevant_context}
    Pregunta del cliente: {user_text}
    Responde en español, de forma profesional y orientada a cerrar la venta.
    """
    
    response = ollama.generate(model="gemma:2b", prompt=prompt)
    
    # 5. Enviar de vuelta a la API de Node.js de WhatsApp
    return send_whatsapp_message(user_phone, response)
```

## 6. Siguientes Pasos (Para cuando se decida implementar)

1.  **Limpiar la Data:** Preparar un documento único y muy limpio que contenga la esencia de *IR Productions*, servicios y precios actualizados.
2.  **Pruebas de Inferencia:** Correr Ollama localmente y verificar cuántos "Tokens por segundo" genera la GTX 1050 Ti con modelos pequeños para asegurar que la respuesta por WhatsApp no tarde más de 10-15 segundos.
3.  **Levantar el Webhook:** Construir el script en Node.js que genere el código QR de WhatsApp y lo mantenga vivo en un proceso de `tmux` o `pm2` en el servidor Debian.