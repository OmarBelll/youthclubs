// script.js

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the fade-in effect
function handleFadeIn() {
    const sections = document.querySelectorAll('.section');

    sections.forEach((section) => {
        if (isInViewport(section) && !section.classList.contains('fade-in-active')) {
            section.classList.add('fade-in-active');
        }
    });
}

// Add a scroll event listener to trigger the fade-in effect
window.addEventListener('scroll', handleFadeIn);
window.addEventListener('load', handleFadeIn); // Handle initial state
