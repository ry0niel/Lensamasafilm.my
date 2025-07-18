// Page 5 Specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Apply typing glitch effect to page title
    const pageTitleElement = document.querySelector('.video-banner-section h1 .typing-glitch-text');
    if (pageTitleElement) {
        const originalText = pageTitleElement.textContent;
        if (typeof applyTypingGlitch === 'function') {
            applyTypingGlitch(pageTitleElement, originalText);
        }
    }

    // Portfolio Slider Functionality (Inspired by mshafx.com)
    const portfolioSlides = document.querySelectorAll('.portfolio-slider-container .portfolio-slide');
    const portfolioPrevButton = document.querySelector('.portfolio-nav-button.prev');
    const portfolioNextButton = document.querySelector('.portfolio-nav-button.next');

    let currentPortfolioSlide = 0;

    function showPortfolioSlide(index) {
        portfolioSlides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev-active');
            if (i === index) {
                slide.classList.add('active');
            } else if (i === (index - 1 + portfolioSlides.length) % portfolioSlides.length) {
                slide.classList.add('prev-active'); // For the slide that just left
            }
        });
    }

    portfolioPrevButton.addEventListener('click', () => {
        currentPortfolioSlide = (currentPortfolioSlide - 1 + portfolioSlides.length) % portfolioSlides.length;
        showPortfolioSlide(currentPortfolioSlide);
    });

    portfolioNextButton.addEventListener('click', () => {
        currentPortfolioSlide = (currentPortfolioSlide + 1) % portfolioSlides.length;
        showPortfolioSlide(currentPortfolioSlide);
    });

    // Add click listener to each slide's button to navigate to its specific page
    portfolioSlides.forEach(slide => {
        const button = slide.querySelector('.common-button');
        const targetPage = slide.dataset.page; // Get target page from data-page attribute
        if (button && targetPage) {
            button.addEventListener('click', () => {
                window.location.href = targetPage;
            });
        }
    });

    // Initial display
    showPortfolioSlide(currentPortfolioSlide);
});
