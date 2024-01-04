document.addEventListener('DOMContentLoaded', function () {
    // Dodaj animacje lub inne interakcje JavaScript

    // Animacja scrollowania do sekcji po kliknięciu w linki w nawigacji
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dodaj efekt paralaksy do sekcji O mnie
    window.addEventListener('scroll', function () {
        const parallax = document.querySelector('#about');
        const scrolled = window.scrollY;
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Dodaj efekt "tilt" dla projektów
    VanillaTilt.init(document.querySelectorAll('.project'), {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
    });
});
