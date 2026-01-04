// script.js
const images = document.querySelectorAll('article img');

images.forEach(img => {
    img.addEventListener('click', function() {
        this.classList.toggle('enlarged');
    });
});

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