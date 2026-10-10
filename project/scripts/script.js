// Shared navigation behavior for all Parkourpedia pages.
// Toggles the dropdown nav menu on narrow screens.
document.addEventListener('DOMContentLoaded', () => {
    // Close any open overlay dropdowns when clicking elsewhere
    document.addEventListener('click', (event) => {
        document.querySelectorAll('.trick-dropdown[open]').forEach((d) => {
            if (!d.contains(event.target)) {
                d.removeAttribute('open');
            }
        });
    });

    // Lazy-load videos: fetch only metadata (first frame) once they near the viewport
    const videos = document.querySelectorAll('video[preload="none"]');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.preload = 'metadata';
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: '200px' });
        videos.forEach((v) => observer.observe(v));
    } else {
        videos.forEach((v) => { v.preload = 'metadata'; });
    }

    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.getElementById('primary-nav-list');

    if (!navToggle || !navList) {
        return;
    }

    navToggle.addEventListener('click', () => {
        const isOpen = navList.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navList.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            navList.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
});
