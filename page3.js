// Page 3 Specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Apply typing glitch effect to page title
    const pageTitleElement = document.querySelector('.achievements-section h1 .typing-glitch-text');
    if (pageTitleElement) {
        const originalText = pageTitleElement.textContent;
        if (typeof applyTypingGlitch === 'function') {
            applyTypingGlitch(pageTitleElement, originalText);
        }
    }
});
