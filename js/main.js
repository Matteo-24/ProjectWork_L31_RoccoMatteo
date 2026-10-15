/* ==========================================================================
   INTERATTIVITÀ SITO WEB (Project Work Pegaso)
   ========================================================================== */

/**
 * Gestione Menu Mobile
 * Alterna la classe 'active' invece di modificare lo stile inline
 */
function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    if (menu) {
        menu.classList.toggle('active');
    }
}

/**
 * Animazioni Scroll (Scroll Reveal)
 * Utilizza IntersectionObserver per prestazioni elevate rispetto all'evento 'scroll'
 */
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Attiva l'animazione quando il 15% dell'elemento è visibile
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Smette di osservare una volta visibile
            }
        });
    }, observerOptions);

    // Registra tutti gli elementi con la classe .reveal
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});