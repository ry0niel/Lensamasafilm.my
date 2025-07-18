// Global JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const headerBar = document.querySelector('.header-bar');
    const scrollUpButton = document.querySelector('.scroll-up-button');
    const mainContentWrapper = document.querySelector('.main-content-wrapper');

    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Adjust scroll threshold
            headerBar.classList.add('scrolled');
        } else {
            headerBar.classList.remove('scrolled');
        }

        // Show/hide scroll-up button
        if (window.scrollY > 300) { // Show after scrolling 300px
            scrollUpButton.style.display = 'flex';
        } else {
            scrollUpButton.style.display = 'none';
        }
    });

    // Scroll to Top Functionality
    if (scrollUpButton) {
        scrollUpButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Header Logo Lighting Animation (Conceptual)
    const headerLogoLeft = document.querySelector('.header-logo-left');
    if (headerLogoLeft) {
        headerLogoLeft.addEventListener('click', () => {
            // Implement lighting animation here (e.g., add/remove a class that triggers CSS animation)
            console.log('Left logo clicked - trigger lighting animation!');
            // For example: headerLogoLeft.classList.add('lighting-effect');
            // setTimeout(() => headerLogoLeft.classList.remove('lighting-effect'), 1000);
            window.location.href = 'index.html'; // Home button functionality
        });
    }

    // Typing Glitch Effect (Simplified Example)
    function applyTypingGlitch(element, text) {
        element.textContent = ''; // Clear existing text
        let i = 0;
        const speed = 50; // Typing speed in ms
        const glitchChance = 0.1; // Chance of a glitch character appearing

        function typeWriter() {
            if (i < text.length) {
                let char = text.charAt(i);
                if (Math.random() < glitchChance) {
                    char = String.fromCharCode(Math.floor(Math.random() * 94) + 33); // Random printable ASCII char
                }
                element.textContent += char;
                i++;
                setTimeout(typeWriter, speed);
            } else {
                element.style.borderRight = 'none'; // Remove cursor after typing
            }
        }
        typeWriter();
    }

    // Example usage for typing glitch on page load (apply to specific elements)
    // const page1Title = document.querySelector('#page1-title');
    // if (page1Title) {
    //     applyTypingGlitch(page1Title, page1Title.textContent); // Pass original text
    // }

    // Intersection Observer for Entrance Animations (Wavering Appear)
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // If you want the animation to play only once, uncomment the next line:
                // observer.unobserve(entry.target);
            } else {
                // Optional: remove 'active' class if element scrolls out of view
                // entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    // Apply observer to all elements that should have entrance animation
    document.querySelectorAll('.fade-in-up').forEach(element => {
        observer.observe(element);
    });

    // Initialize Locomotive Scroll (if using)
    // This requires the Locomotive Scroll library to be included in your HTML
    // try {
    //     const scroll = new LocomotiveScroll({
    //         el: mainContentWrapper, // The element that will be scrolled
    //         smooth: true,
    //         // Add other options as needed
    //     });
    // } catch (e) {
    //     console.warn("Locomotive Scroll not initialized. Make sure the library is included.", e);
    // }
});
