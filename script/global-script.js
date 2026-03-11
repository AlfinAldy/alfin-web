// hamburger menu for mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navbarMenu = document.querySelector('.navbar-menu');
    const navbarLinks = document.querySelectorAll('.navbar-menu-link');

    // Toggle menu on hamburger click
    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburgerMenu.classList.remove('active');
            navbarMenu.classList.remove('active');
            
            // Remove active class from all links
            navbarLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNavbar = event.target.closest('.navbar');
        
        if (!isClickInsideNavbar && navbarMenu.classList.contains('active')) {
            hamburgerMenu.classList.remove('active');
            navbarMenu.classList.remove('active');
        }
    });

    // Active link on page load based on scroll position
    window.addEventListener('scroll', function() {
        updateActiveLink();
    });

    // Set active link based on current section
    function updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });

        navbarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }

    // Set initial active link
    updateActiveLink();
});

// loader animation
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    
    // Delay for minimum 1.5 seconds to show loading animation
    setTimeout(function() {
        loader.classList.add('hidden');
        
        // Remove loader from DOM after transition completes
        setTimeout(function() {
            loader.style.display = 'none';
        }, 600);
    }, 1500);
});

// cursor element follower
document.addEventListener('DOMContentLoaded', function() {
    const cursorFollower = document.getElementById('cursorFollower');
    
    // Only run on devices with hover capability
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        
        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        // Smooth cursor follow
        function animateCursor() {
            const dx = mouseX - cursorX;
            const dy = mouseY - cursorY;
            
            cursorX += dx * 0.15;
            cursorY += dy * 0.15;
            
            cursorFollower.style.left = cursorX + 'px';
            cursorFollower.style.top = cursorY + 'px';
            
            requestAnimationFrame(animateCursor);
        }
        animateCursor();
        
        // Add hover effect on interactive elements
        const hoverElements = document.querySelectorAll('a, button, .project-card, .certificate-card, .skill-item, .social-link');
        
        hoverElements.forEach(function(element) {
            element.addEventListener('mouseenter', function() {
                cursorFollower.classList.add('hover');
            });
            element.addEventListener('mouseleave', function() {
                cursorFollower.classList.remove('hover');
            });
        });
        
        // Hide cursor when leaving window
        document.addEventListener('mouseleave', function() {
            cursorFollower.style.opacity = '0';
        });
        
        document.addEventListener('mouseenter', function() {
            cursorFollower.style.opacity = '1';
        });
    }
});

// ===== Mouse Trail Particles =====
document.addEventListener('DOMContentLoaded', function() {
    const mouseParticles = document.getElementById('mouseParticles');
    let particleIndex = 0;
    
    // Only run on devices with hover capability
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        document.addEventListener('mousemove', function(e) {
            // Create particle every few pixels
            if (particleIndex % 3 === 0) {
                createMouseParticle(e.clientX, e.clientY);
            }
            particleIndex++;
        });
    }
    
    function createMouseParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'mouse-particle';
        
        // Random size variation
        const size = 4 + Math.random() * 6;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random color variation
        const colors = ['var(--element-color)', 'var(--font-color)', 'var(--secondary-color)'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        // Position
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        mouseParticles.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(function() {
            particle.remove();
        }, 1000);
    }
});

// ===== Theme Toggle =====
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateIcon(savedTheme);
    }
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        if (newTheme === 'light') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        
        updateIcon(newTheme);
    });
    
    function updateIcon(theme) {
        if (theme === 'dark') {
            icon.className = 'fa-solid fa-sun';
        } else {
            icon.className = 'fa-solid fa-moon';
        }
    }
});

// ===== Parallax Effect =====
document.addEventListener('DOMContentLoaded', function() {
    const shapes = document.querySelectorAll('.geometric-shape');
    
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        shapes.forEach(function(shape, index) {
            const speed = (index + 1) * 0.05;
            shape.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
});
