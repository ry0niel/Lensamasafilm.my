// Page 4 Specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Glitching Image Slider
    const glitchImages = document.querySelectorAll('.glitch-image-slider .glitch-image');
    let currentGlitchImage = 0;

    function showGlitchImage(index) {
        glitchImages.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    function nextGlitchImage() {
        currentGlitchImage = (currentGlitchImage + 1) % glitchImages.length;
        showGlitchImage(currentGlitchImage);
    }

    // Initial display
    showGlitchImage(currentGlitchImage);

    // Auto-advance slider
    setInterval(nextGlitchImage, 3000); // Change image every 3 seconds

    // Apply typing glitch effect to page title
    const pageTitleElement = document.querySelector('.menu-section h1 .typing-glitch-text');
    if (pageTitleElement) {
        const originalText = pageTitleElement.textContent;
        if (typeof applyTypingGlitch === 'function') {
            applyTypingGlitch(pageTitleElement, originalText);
        }
    }
});
