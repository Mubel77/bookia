document.addEventListener('DOMContentLoaded', function () {
    const logo = document.querySelector('.logo');
    const overlayHero = document.querySelector('.overlay-hero');
    const cardsLibros = document.querySelectorAll('.libro-card');
    const cardsResenas = document.querySelectorAll('.resena-card');

    if (logo) {
        logo.addEventListener('mouseenter', function () {
            logo.style.transition = 'transform 0.4s ease';
            logo.style.transform = 'scale(1.08)';
        });

        logo.addEventListener('mouseleave', function () {
            logo.style.transition = 'transform 0.4s ease';
            logo.style.transform = 'scale(1)';
        });
    }

    if (overlayHero) {
        overlayHero.animate(
            [
                { transform: 'scale(0.96)', opacity: 0.85 },
                { transform: 'scale(1)', opacity: 1 }
            ],
            {
                duration: 800,
                easing: 'ease-out',
                fill: 'forwards'
            }
        );
    }

    cardsLibros.forEach((card) => {
        card.addEventListener('mouseenter', function () {
            card.style.transition = 'transform 0.25s ease, box-shadow 0.25s ease';
            card.style.transform = 'translateY(-8px) scale(1.02)';
            card.style.boxShadow = '0 12px 28px rgba(0,0,0,0.18)';
        });

        card.addEventListener('mouseleave', function () {
            card.style.transition = 'transform 0.25s ease, box-shadow 0.25s ease';
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        });
    });

    cardsResenas.forEach((card) => {
        card.addEventListener('mouseenter', function () {
            card.style.transition = 'transform 0.25s ease, box-shadow 0.25s ease';
            card.style.transform = 'translateY(-6px) scale(1.01)';
            card.style.boxShadow = '0 10px 24px rgba(0,0,0,0.16)';
        });

        card.addEventListener('mouseleave', function () {
            card.style.transition = 'transform 0.25s ease, box-shadow 0.25s ease';
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        });
    });
});
