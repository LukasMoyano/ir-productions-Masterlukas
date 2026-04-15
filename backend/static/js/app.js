/**
 * IR Productions Nexus - Main Application JavaScript
 * ================================================
 * Maneja interacciones globales del sitio web.
 */

// ============================================================================
// UTILIDADES
// ============================================================================

/**
 * Smooth scroll para enlaces internos
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const targetId = href.replace('#', '');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Animación de aparición al hacer scroll (Intersection Observer)
 */
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos con clase 'animate-on-scroll'
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Manejo del formulario de contacto
 */
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (result.success) {
                alert('Mensaje enviado exitosamente. Nos pondremos en contacto pronto.');
                contactForm.reset();
            } else {
                alert('Error al enviar. Por favor intenta nuevamente.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error de conexión. Por favor intenta nuevamente.');
        }
    });
}

/**
 * Actualizar año en el footer
 */
function updateFooterYear() {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
}

/**
 * Setup del header sticky con backdrop blur
 */
function setupStickyHeader() {
    const header = document.querySelector('header');
    if (!header) return;

    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// ============================================================================
// INICIALIZACIÓN
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    setupSmoothScroll();
    setupScrollAnimations();
    setupContactForm();
    updateFooterYear();
    setupStickyHeader();
    
    console.log('IR Productions Nexus - Loaded successfully');
});

// ============================================================================
// FUNCIONES GLOBALES
// ============================================================================

/**
 * Función para cambiar idioma (usada en el header)
 */
function toggleLanguage(newLang) {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLang);
    window.location.href = url.toString();
}

/**
 * Función para abrir WhatsApp con mensaje predefinido
 */
function openWhatsApp(message = '') {
    const phoneNumber = '573197919742';
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
}

// Exportar funciones globales
window.toggleLanguage = toggleLanguage;
window.openWhatsApp = openWhatsApp;
