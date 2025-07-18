// Page 6 Specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Apply typing glitch effect to page title
    const pageTitleElement = document.querySelector('.short-film-section h1 .typing-glitch-text');
    if (pageTitleElement) {
        const originalText = pageTitleElement.textContent;
        if (typeof applyTypingGlitch === 'function') {
            applyTypingGlitch(pageTitleElement, originalText);
        }
    }
});
