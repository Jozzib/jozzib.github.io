document.addEventListener('DOMContentLoaded', () => {
// Mobile Menu Toggle Functionality
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
menuToggle.addEventListener('click', () => {
navLinks.classList.toggle('active');
});
}
});
// ==========================
// Portfolio Modal Functionality
// ==========================
document.addEventListener('DOMContentLoaded', () => {
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close-btn');

// Make sure the modal elements exist on this page before running
if (modal && modalImg && closeBtn) {
// Find all portfolio items and add click listeners
document.querySelectorAll('.portfolio-item').forEach(item => {
item.addEventListener('click', () => {
modal.style.display = 'block';
modalImg.src = item.getAttribute('data-img-src');
captionText.textContent = item.getAttribute('data-title');
});
});

// Close modal when clicking the 'X' button
closeBtn.addEventListener('click', () => {
modal.style.display = 'none';
});

// Close modal when clicking anywhere outside the image background
window.addEventListener('click', (e) => {
if (e.target === modal) {
modal.style.display = 'none';
}
});
}
});
