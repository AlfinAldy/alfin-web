// ===== Hamburger Menu Toggle =====
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

// ===== Loading Screen =====
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

// ===== Custom Cursor Follower =====
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