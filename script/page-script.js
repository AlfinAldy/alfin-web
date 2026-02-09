// Function to show a specific section with animation
function showSection(sectionId) {
    // Get all sections
    const sections = ['game-section', 'web-section', 'design-section', 'next-section'];
    const links = ['game-link', 'web-link', 'design-link', 'next-link'];

    // Remove active class from all links
    links.forEach(linkId => {
        document.getElementById(linkId).classList.remove('active');
    });

    // Hide all sections with animation
    sections.forEach(secId => {
        const section = document.getElementById(secId);
        section.classList.remove('active');
        setTimeout(() => {
            section.style.display = 'none';
        }, 300); // Match transition duration
    });

    // Show the selected section with animation
    setTimeout(() => {
        const targetSection = document.getElementById(sectionId);
        targetSection.style.display = 'block';
        setTimeout(() => {
            targetSection.classList.add('active');
        }, 10); // Small delay to trigger animation

        // Add active class to the clicked link
        const linkId = sectionId.replace('-section', '-link');
        document.getElementById(linkId).classList.add('active');
    }, 300);
}

// Check URL parameters and show initial section
const urlParams = new URLSearchParams(window.location.search);
const section = urlParams.get('section');
let initialSection = 'game-section'; // default

if (section === 'web') {
    initialSection = 'web-section';
} else if (section === 'design') {
    initialSection = 'design-section';
} else if (section === 'next') {
    initialSection = 'next-section';
}

// Show initial section without animation
document.getElementById(initialSection).style.display = 'block';
document.getElementById(initialSection).classList.add('active');
const initialLink = initialSection.replace('-section', '-link');
document.getElementById(initialLink).classList.add('active');

// Add event listeners to the sidebar links
document.getElementById('game-link').addEventListener('click', function(e) {
    e.preventDefault();
    showSection('game-section');
});

document.getElementById('web-link').addEventListener('click', function(e) {
    e.preventDefault();
    showSection('web-section');
});

document.getElementById('design-link').addEventListener('click', function(e) {
    e.preventDefault();
    showSection('design-section');
});

document.getElementById('next-link').addEventListener('click', function(e) {
    e.preventDefault();
    showSection('next-section');
});
