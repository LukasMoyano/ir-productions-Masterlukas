"""
IR Productions Nexus - Unified Flask & React Backend
=====================================================
Este servidor sirve la aplicación moderna de React desde la carpeta /dist
y proporciona los servicios de API necesarios.

Author: Lukas Moyano
Location: Fusagasugá, Cundinamarca, Colombia
"""

from flask import Flask, send_from_directory, jsonify, request
import os
import json
from datetime import datetime

# Configuración del proyecto
# El build de React se encuentra en la carpeta 'dist' en la raíz
ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
DIST_DIR = os.path.join(ROOT_DIR, 'dist')

app = Flask(__name__, static_folder=DIST_DIR, static_url_path='')

# ============================================================================
# FUNCIONES AUXILIARES
# ============================================================================

def get_hpc_catalog():
    """Carga el catálogo HPC desde la carpeta de datos del build."""
    catalog_path = os.path.join(DIST_DIR, 'data', 'hpc_catalog_mock.json')
    if os.path.exists(catalog_path):
        with open(catalog_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {'products': [], 'last_updated': None}

# ============================================================================
# RUTAS DE API (Back-end)
# ============================================================================

@app.route('/api/hpc/catalog')
def api_hpc_catalog():
    """API endpoint para obtener el catálogo HPC."""
    catalog = get_hpc_catalog()
    return jsonify(catalog)

@app.route('/api/contact', methods=['POST'])
def api_contact():
    """API endpoint para formulario de contacto."""
    data = request.json
    app.logger.info(f"Nuevo mensaje de contacto recibido: {data}")
    return jsonify({'success': True, 'message': 'Mensaje recibido en el Nexus'})

# ============================================================================
# MANEJO DEL FRONTEND (React SPA)
# ============================================================================

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react(path):
    """
    Sirve la aplicación de React. 
    1. Si path está vacío, sirve index.html.
    2. Si el archivo existe físicamente en dist/, lo sirve (Flask lo maneja por extensión).
    3. Si no existe, sirve index.html (soporte para React Router).
    """
    if path == "" or path is None:
        return send_from_directory(app.static_folder, 'index.html')
    
    # Verificar si el archivo existe en la carpeta dist
    file_path = os.path.join(app.static_folder, path)
    if os.path.isfile(file_path):
        return send_from_directory(app.static_folder, path)
    else:
        # Fallback para React Router (rutas virtuales)
        return send_from_directory(app.static_folder, 'index.html')

# ============================================================================
# PUNTO DE ENTRADA
# ============================================================================

if __name__ == '__main__':
    print(f"🚀 Nexus Central iniciado en http://localhost:5000")
    print(f"📂 Sirviendo archivos desde: {DIST_DIR}")
    
    app.run(
        debug=os.environ.get('FLASK_DEBUG', 'True').lower() == 'true',
        host='0.0.0.0',
        port=int(os.environ.get('PORT', 5000)),
        threaded=True
    )
