// Shared navigation behavior for all Parkourpedia pages.
// Toggles the dropdown nav menu on narrow screens.
document.addEventListener('DOMContentLoaded', () => {
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
