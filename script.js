// script.js
const images = document.querySelectorAll('article img');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

const overlay = document.createElement('div');
overlay.classList.add('nav-overlay');
document.body.appendChild(overlay);

images.forEach(img => {
    img.addEventListener('click', function() {
        this.classList.toggle('enlarged');
    });
});

// Toggle-funktion
function toggleMenu() {
    const isOpen = navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Uppdatera aria-expanded för tillgänglighet
    navToggle.setAttribute('aria-expanded', isOpen);
    
    // Förhindra scroll när menyn är öppen
    document.body.style.overflow = isOpen ? 'hidden' : '';
}

document.querySelectorAll(".project-toggle").forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".project-card");

        card.classList.toggle("project-card--expanded");

        button.textContent =
            card.classList.contains("project-card--expanded")
                ? "Visa mindre"
                : "Visa mer";
    });
});

navToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        toggleMenu();
    }
});