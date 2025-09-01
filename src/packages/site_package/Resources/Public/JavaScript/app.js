console.log('Say Hello to the dev: dhackiewicz@gmail.com');

document.addEventListener('DOMContentLoaded', function() {
// Function to check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle visibility changes
function handleVisibility() {
    const elements = document.querySelectorAll('.checkifactive');
    
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('link-fixed');
        } else {
            element.classList.remove('link-fixed');
        }
    });
}
handleVisibility();
// Add event listeners
setTimeout(() => {
    window.addEventListener('scroll', handleVisibility);
    window.addEventListener('resize', handleVisibility);
}, 2000);

// Add smooth scroll behavior to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

    

    
    
           

});

