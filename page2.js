
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.carousel-button.prev');
    const nextBtn = document.querySelector('.carousel-button.next');
    const slideButtons = document.querySelectorAll('.slide-btn');

    let currIndex = 0;
    const angle = 360 / slides.length;
    const radius = 350; // distance for 3D placement

    function updateCarousel() {
        slides.forEach((slide, i) => {
            const offset = (i - currIndex + slides.length) % slides.length;

            if (offset === 0) {
                slide.style.transform = `translateZ(${radius}px) scale(1.2)`;
                slide.style.opacity = 1;
                slide.style.filter = "blur(0)";
                slide.style.zIndex = 3;
            } else if (offset === 1) {
                slide.style.transform = `translateX(250px) rotateY(-20deg) scale(0.9)`;
                slide.style.opacity = 0.6;
                slide.style.filter = "blur(2px)";
                slide.style.zIndex = 2;
            } else if (offset === slides.length - 1) {
                slide.style.transform = `translateX(-250px) rotateY(20deg) scale(0.9)`;
                slide.style.opacity = 0.6;
                slide.style.filter = "blur(2px)";
                slide.style.zIndex = 2;
            } else {
                slide.style.transform = `translateZ(0) scale(0.8)`;
                slide.style.opacity = 0;
                slide.style.filter = "blur(5px)";
                slide.style.zIndex = 1;
            }
        });
    }

    prevBtn.addEventListener("click", () => {
        currIndex = (currIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
        currIndex = (currIndex + 1) % slides.length;
        updateCarousel();
    });

    // Slide buttons click (links to specific pages)
    slideButtons.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            const targetPage = slides[idx].getAttribute('data-page');
            window.location.href = targetPage;
        });
    });

    updateCarousel();
});
