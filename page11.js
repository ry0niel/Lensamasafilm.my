// Page 11 Specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Apply typing glitch effect to page title
    const pageTitleElement = document.querySelector('.photography-banner-section h1 .typing-glitch-text');
    if (pageTitleElement) {
        const originalText = pageTitleElement.textContent;
        if (typeof applyTypingGlitch === 'function') {
            applyTypingGlitch(pageTitleElement, originalText);
        }
    }

    // Java Banner Slider (Photography Banner)
    const bannerSlides = document.querySelectorAll('.photography-banner-slider .banner-slide');
    let currentBannerSlide = 0;

    function showBannerSlide(index) {
        bannerSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextBannerSlide() {
        currentBannerSlide = (currentBannerSlide + 1) % bannerSlides.length;
        showBannerSlide(currentBannerSlide);
    }

    // Initial display
    showBannerSlide(currentBannerSlide);

    // Auto-advance slider
    setInterval(nextBannerSlide, 4000); // Change slide every 4 seconds

    // Photo Gallery Sliders (for each category)
    document.querySelectorAll('.photography-category-section').forEach(section => {
        const galleryPhotos = section.querySelectorAll('.photo-slider-controls .gallery-photo');
        const prevButton = section.querySelector('.gallery-nav-button.prev');
        const nextButton = section.querySelector('.gallery-nav-button.next');

        let currentGalleryPhoto = 0;

        function showGalleryPhoto(index) {
            galleryPhotos.forEach((photo, i) => {
                photo.classList.remove('active');
                if (i === index) {
                    photo.classList.add('active');
                }
            });
        }

        prevButton.addEventListener('click', () => {
            currentGalleryPhoto = (currentGalleryPhoto - 1 + galleryPhotos.length) % galleryPhotos.length;
            showGalleryPhoto(currentGalleryPhoto);
        });

        nextButton.addEventListener('click', () => {
            currentGalleryPhoto = (currentGalleryPhoto + 1) % galleryPhotos.length;
            showGalleryPhoto(currentGalleryPhoto);
        });

        // Initial display for each gallery
        showGalleryPhoto(currentGalleryPhoto);
    });
});
