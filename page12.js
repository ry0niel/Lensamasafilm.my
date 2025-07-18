// Page 12 Specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Apply typing glitch effect to page title
    const pageTitleElement = document.querySelector('.contact-section h1 .typing-glitch-text');
    if (pageTitleElement) {
        const originalText = pageTitleElement.textContent;
        if (typeof applyTypingGlitch === 'function') {
            applyTypingGlitch(pageTitleElement, originalText);
        }
    }

    // Send Email Functionality
    window.sendEmail = function() {
        const emailAddress = 'your.email@example.com'; // Replace with your actual email
        const subject = 'Inquiry from your Cinematography Portfolio';
        const body = 'Hello [Your Name],\n\nI would like to discuss...'; // Pre-fill body if desired

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    // Draggable Sphere (Interactive Element)
    const draggableSphere = document.getElementById('draggable-sphere');
    let isDragging = false;
    let offsetX, offsetY;

    if (draggableSphere) {
        draggableSphere.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - draggableSphere.getBoundingClientRect().left;
            offsetY = e.clientY - draggableSphere.getBoundingClientRect().top;
            draggableSphere.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault(); // Prevent text selection etc.
            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;

            draggableSphere.style.left = `${newX}px`;
            draggableSphere.style.top = `${newY}px`;
            draggableSphere.style.position = 'absolute'; // Ensure it moves freely
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            draggableSphere.style.cursor = 'grab';
        });

        // Optional: Add a subtle animation on hover for the draggable element
        draggableSphere.addEventListener('mouseenter', () => {
            if (!isDragging) {
                draggableSphere.style.transform = 'scale(1.1)';
            }
        });
        draggableSphere.addEventListener('mouseleave', () => {
            if (!isDragging) {
                draggableSphere.style.transform = 'scale(1)';
            }
        });
    }
});
