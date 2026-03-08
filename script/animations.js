// animations.js

// Add your interactive animations and scroll effects here

// Example: Smooth scroll to section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Simple fade-in effect on scroll
let fadeInElements = document.querySelectorAll('.fade-in');

function handleScroll() {
    fadeInElements.forEach(element => {
        let elementPosition = element.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;

        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll(); // Initial check
