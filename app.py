"""
IR Productions Nexus - Flask Application
=========================================
Aplicación Flask para el sitio web de IR Productions.
Migración desde Vite/React para simplificar la arquitectura y despliegue.

Author: IR Productions Tech Team
Location: Fusagasugá, Cundinamarca, Colombia
"""

from flask import Flask, render_template, jsonify, request, send_from_directory
from flask_babel import Babel, gettext as _, lazy_gettext as _l
import json
import os
from datetime import datetime

# ============================================================================
# CONFIGURACIÓN DE LA APLICACIÓN
# ============================================================================

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'ir-productions-nexus-2026-secret-key-change-in-production')
app.config['JSON_SORT_KEYS'] = False

# Configuración para Flask-Babel (Internacionalización)
app.config['BABEL_DEFAULT_LOCALE'] = 'es'
app.config['BABEL_TRANSLATION_DIRECTORIES'] = 'translations'

# Inicializar Babel
babel = Babel(app)

# ============================================================================
# FUNCIONES AUXILIARES
# ============================================================================

def get_locale():
    """Determina el idioma del usuario basado en la sesión o Accept-Language header."""
    # Prioridad: 1) Parámetro URL, 2) Sesión, 3) Accept-Language, 4) Default
    lang = request.args.get('lang')
    if lang and lang in ['es', 'en']:
        return lang
    
    # Intentar obtener de la sesión (si se implementa flask-session)
    # session.get('lang', ...)
    
    # Fallback a Accept-Language del navegador
    return request.accept_languages.best_match(['es', 'en'], 'es')

babel.init_app(app, locale_selector=get_locale)

def load_translations(lang='es'):
    """Carga las traducciones desde archivos JSON."""
    translations_path = os.path.join(app.static_folder, 'translations', f'{lang}.json')
    if os.path.exists(translations_path):
        with open(translations_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    # Fallback a español por defecto
    default_path = os.path.join(app.static_folder, 'translations', 'es.json')
    with open(default_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def get_hpc_catalog():
    """Carga el catálogo HPC generado por los agentes."""
    catalog_path = os.path.join(app.static_folder, 'data', 'hpc_catalog.json')
    if os.path.exists(catalog_path):
        with open(catalog_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {'products': [], 'last_updated': None}

# ============================================================================
# RUTAS PRINCIPALES
# ============================================================================

@app.route('/')
def index():
    """Página de inicio (Home)."""
    lang = request.args.get('lang', 'es')
    translations = load_translations(lang)
    return render_template('index.html',
                         lang=lang,
                         t=translations.get('index', {}),
                         current_year=datetime.now().year)

@app.route('/presentacion-cultivatech')
def cultivatech_presentation():
    """Página de presentación CultivaTech."""
    lang = request.args.get('lang', 'es')
    translations = load_translations(lang)
    return render_template('cultivatech_presentation.html',
                         lang=lang,
                         t=translations.get('cultivatech', {}),
                         current_year=datetime.now().year)

@app.route('/talleres-agro-innovacion')
def agro_workshops():
    """Página de Talleres Agro-Innovación."""
    lang = request.args.get('lang', 'es')
    translations = load_translations(lang)
    return render_template('agro_workshops.html',
                         lang=lang,
                         t=translations.get('agro_workshops', {}),
                         current_year=datetime.now().year)

@app.route('/hpc-builder')
def hpc_builder():
    """Configurador de Workstations HPC/IA (E-commerce Dropshipping)."""
    lang = request.args.get('lang', 'es')
    translations = load_translations(lang)
    catalog = get_hpc_catalog()
    return render_template('hpc_builder.html',
                         lang=lang,
                         t=translations.get('hpc_builder', {}),
                         catalog=catalog,
                         current_year=datetime.now().year)

@app.route('/404')
def not_found():
    """Página de error 404."""
    lang = request.args.get('lang', 'es')
    translations = load_translations(lang)
    return render_template('404.html',
                         lang=lang,
                         t=translations.get('errors', {}),
                         current_year=datetime.now().year), 404

# ============================================================================
# RUTAS DE API
# ============================================================================

@app.route('/api/hpc/catalog')
def api_hpc_catalog():
    """API endpoint para obtener el catálogo HPC actualizado."""
    catalog = get_hpc_catalog()
    return jsonify(catalog)

@app.route('/api/hpc/product/<product_id>')
def api_hpc_product(product_id):
    """API endpoint para obtener un producto específico."""
    catalog = get_hpc_catalog()
    for product in catalog.get('products', []):
        if product.get('id') == product_id:
            return jsonify(product)
    return jsonify({'error': 'Product not found'}), 404

@app.route('/api/contact', methods=['POST'])
def api_contact():
    """API endpoint para formulario de contacto."""
    data = request.json
    # Aquí se implementará el envío de email o almacenamiento en DB
    # Por ahora, solo logueamos
    app.logger.info(f"Nuevo mensaje de contacto: {data}")
    return jsonify({'success': True, 'message': 'Mensaje recibido'})

# ============================================================================
# MANEJADORES DE ERRORES
# ============================================================================

@app.errorhandler(404)
def page_not_found(e):
    """Manejador global de errores 404."""
    lang = request.args.get('lang', 'es')
    translations = load_translations(lang)
    return render_template('404.html',
                         lang=lang,
                         t=translations.get('errors', {}),
                         current_year=datetime.now().year), 404

@app.errorhandler(500)
def internal_server_error(e):
    """Manejador de errores 500."""
    lang = request.args.get('lang', 'es')
    translations = load_translations(lang)
    return render_template('500.html',
                         lang=lang,
                         t=translations.get('errors', {}),
                         current_year=datetime.now().year), 500

# ============================================================================
# CONTEXTO DE LA PLANTILLA
# ============================================================================

@app.context_processor
def utility_processor():
    """Funciones disponibles en todos los templates."""
    return {
        'site_name': 'IR Productions',
        'site_url': 'https://www.ir-productions.com',
        'current_year': datetime.now().year,
    }

# ============================================================================
# PUNTO DE ENTRADA
# ============================================================================

if __name__ == '__main__':
    # Configuración para desarrollo
    app.run(
        debug=os.environ.get('FLASK_DEBUG', 'True').lower() == 'true',
        host='0.0.0.0',
        port=int(os.environ.get('PORT', 5000)),
        threaded=True
    )
