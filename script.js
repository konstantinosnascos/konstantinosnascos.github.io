// script.js
const images = document.querySelectorAll('article img');

images.forEach(img => {
    img.addEventListener('click', function() {
        this.classList.toggle('enlarged');
    });
});