// Mock Market Data
const marketData = {
    banknifty: { price: 47250, change: 1.25 },
    nifty: { price: 23450, change: 0.85 },
    sensex: { price: 78250, change: 0.95 }
};

// Update market data
function updateMarkets() {
    document.getElementById('bn-price').textContent = '₹' + marketData.banknifty.price.toLocaleString();
    document.getElementById('bn-change').textContent = '+' + marketData.banknifty.change.toFixed(2) + '%';
    
    document.getElementById('nf-price').textContent = '₹' + marketData.nifty.price.toLocaleString();
    document.getElementById('nf-change').textContent = '+' + marketData.nifty.change.toFixed(2) + '%';
    
    document.getElementById('sx-price').textContent = '₹' + marketData.sensex.price.toLocaleString();
    document.getElementById('sx-change').textContent = '+' + marketData.sensex.change.toFixed(2) + '%';
}

// Update on load
document.addEventListener('DOMContentLoaded', updateMarkets);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    this.reset();
});