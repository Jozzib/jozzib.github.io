document.addEventListener('DOMContentLoaded', () => {
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
menuToggle.addEventListener('click', () => {
navLinks.classList.toggle('active');
menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});
}

const currentLocation = location.pathname.split('/').pop() || 'index.html';
const linkItems = document.querySelectorAll('.nav-links a');

linkItems.forEach(link => {
if(link.getAttribute('href') === currentLocation) {
link.classList.add('active');
}
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
contactForm.addEventListener('submit', (e) => {
e.preventDefault();
alert('Thank you for reaching out! Your message has been sent successfully.');
contactForm.reset();
});
}
});
