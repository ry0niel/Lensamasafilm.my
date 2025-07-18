// Page 1 Specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for "About Me" button
    const aboutMeButton = document.querySelector('.header-nav-button[onclick*="about-me-section"]');
    if (aboutMeButton) {
        aboutMeButton.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.getElementById('about-me-section');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // JavaScript Banner Slider for About Me section
    const sliderImages = document.querySelectorAll('.photo-slider-container .slider-image');
    let currentSlide = 0;

    function showSlide(index) {
        sliderImages.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % sliderImages.length;
        showSlide(currentSlide);
    }

    // Initial display
    showSlide(currentSlide);

    // Auto-advance slider
    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Typing Glitch Effect for the bottom section title
    const thunderTitleElement = document.querySelector('.thunder-text-container .typing-glitch-text');
    if (thunderTitleElement) {
        const originalText = thunderTitleElement.textContent;
        // Re-apply typing glitch on page load
        // This function is defined in global.js, ensure global.js is loaded before page1.js
        if (typeof applyTypingGlitch === 'function') {
            applyTypingGlitch(thunderTitleElement, originalText);
        }
    }
});

// Function to scroll to a specific section (used by header buttons)
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
