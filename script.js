document.addEventListener('DOMContentLoaded', () => {
// 1. Mobile Menu Toggle Functionality
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
menuToggle.addEventListener('click', () => {
navLinks.classList.toggle('active');
});
}

// 2. Portfolio Image Lightbox Modal Popup Handler
const cards = document.querySelectorAll('.portfolio-card');

if (cards.length > 0 && !document.getElementById('portfolioModal')) {
const modal = document.createElement('div');
modal.id = 'portfolioModal';
modal.style.cssText = 'display:none; position:fixed; z-index:9999; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.92); align-items:center; justify-content:center; flex-direction:column; padding:20px; box-sizing:border-box;';

modal.innerHTML = `
<span id="closePortfolioModal" style="position:absolute; top:20px; right:30px; color:#d4af37; font-size:45px; font-weight:bold; cursor:pointer; z-index:10000;">&times;</span>
<img id="modalImageContent" style="max-width:90%; max-height:78vh; object-fit:contain; border-radius:8px; border:1px solid #333; box-shadow: 0 10px 30px rgba(0,0,0,0.8);">
<p id="modalCaption" style="color:#fff; margin-top:20px; font-size:20px; font-family:'Playfair Display',serif; text-align:center;"></p>
`;
document.body.appendChild(modal);

const modalImg = document.getElementById('modalImageContent');
const modalCaption = document.getElementById('modalCaption');
const closeBtn = document.getElementById('closePortfolioModal');

cards.forEach(card => {
card.addEventListener('click', (e) => {
e.preventDefault();
const img = card.querySelector('img');
const title = card.querySelector('h3').innerText;

if (img) {
modalImg.src = img.src;
modalCaption.innerText = title;
modal.style.display = 'flex';
}
});
});

closeBtn.addEventListener('click', () => {
modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
if (e.target === modal) {
modal.style.display = 'none';
}
});
}
});
