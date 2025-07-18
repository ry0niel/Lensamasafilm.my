
	document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const prev = document.querySelector('.carousel-button.prev');
    const next = document.querySelector('.carousel-button.next');

    const title = document.getElementById('video-title');
    const desc = document.getElementById('video-description');
    const link = document.getElementById('video-link');

    let index = 0;
    const radius = 350;

    function updateCarousel() {
        slides.forEach((slide, i) => {
            const offset = (i - index + slides.length) % slides.length;

            if (offset === 0) {
                slide.style.transform = `translateZ(${radius}px) scale(1.1)`;
                slide.style.opacity = '1';
                slide.style.filter = 'blur(0)';
                slide.style.zIndex = '3';
            } else if (offset === 1) {
                slide.style.transform = `translateX(300px) rotateY(-20deg) scale(0.9)`;
                slide.style.opacity = '0.6';
                slide.style.filter = 'blur(2px)';
                slide.style.zIndex = '2';
            } else if (offset === slides.length - 1) {
                slide.style.transform = `translateX(-300px) rotateY(20deg) scale(0.9)`;
                slide.style.opacity = '0.6';
                slide.style.filter = 'blur(2px)';
                slide.style.zIndex = '2';
            } else {
                slide.style.transform = `translateZ(0) scale(0.7)`;
                slide.style.opacity = '0';
                slide.style.filter = 'blur(5px)';
                slide.style.zIndex = '1';
            }
        });

        const activeSlide = slides[index];
        if (title && desc && link) {
            title.textContent = activeSlide.getAttribute('data-title') || '';
            desc.textContent = activeSlide.getAttribute('data-description') || '';
            link.href = activeSlide.getAttribute('data-link') || '#';
        }
    }

    prev.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    next.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        updateCarousel();
    });

    updateCarousel();
});
