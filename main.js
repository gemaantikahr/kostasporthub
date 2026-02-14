// Mobile Menu Toggle
const btn = document.querySelector('button[aria-controls="mobile-menu"]');
const menu = document.querySelector('#mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Close mobile menu if open
        if (!menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
        }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
