document.addEventListener('DOMContentLoaded', () => {

    // Trigger explicit animation sequence on top viewport architecture
    setTimeout(() => {
        document.body.classList.add('app-ready');
    }, 100);

    // 1. UNIFIED GOLD LERP CURSOR LOGIC SYSTEM
    const cursor = document.getElementById('customCursor');
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    const lerpFactor = 0.15;

    window.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function runCursorLoop() {
        currentX += (targetX - currentX) * lerpFactor;
        currentY += (targetY - currentY) * lerpFactor;
        if (cursor) {
            cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
        }
        requestAnimationFrame(runCursorLoop);
    }
    requestAnimationFrame(runCursorLoop);

    // Expand interactive footprint envelopes on target markup nodes
    const actionableElements = document.querySelectorAll('a, button, input, textarea, .service-card, .masonry-item');
    actionableElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor && cursor.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => cursor && cursor.classList.remove('cursor-hover'));
    });

    // 2. SAFETY FIX: DELAYED INTERSECTIONOBSERVER FOR LOCAL ASSETS
    const createScrollObserver = (elementId, thresholdValue = 0.2) => {
        const targetElement = document.getElementById(elementId);
        if (!targetElement) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { root: null, threshold: thresholdValue });

        observer.observe(targetElement);
    };

    // Force the CSS Masonry layouts to wait until image rendering sizes are finalized
    window.addEventListener('load', () => {
        createScrollObserver('aboutTrigger', 0.25);
        createScrollObserver('servicesTrigger', 0.12);
        createScrollObserver('galleryTrigger', 0.05); // Lowered threshold for reliable local load triggers
        createScrollObserver('testimonialTrigger', 0.35);
    });

    // 3. CONTACT FORM STATE SWAP INTERACTION
    const formElement = document.getElementById('weddingForm');
    const successContainer = document.getElementById('formSuccess');

    if (formElement && successContainer) {
        formElement.addEventListener('submit', (e) => {
            e.preventDefault();
            formElement.style.display = 'none';
            successContainer.style.display = 'block';
        });
    }
});