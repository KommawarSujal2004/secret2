// Create confetti effect
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#f093fb', '#f5576c', '#ffd700', '#ff69b4', '#00ffff', '#ff1493'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 10 + 5) + 'px';
            
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 30);
    }
}

// Start confetti on page load
createConfetti();

// Repeat confetti every 5 seconds
setInterval(createConfetti, 5000);

// Add sparkle effect to photo on hover
const photo = document.querySelector('.photo');
if (photo) {
    photo.addEventListener('mouseenter', () => {
        photo.style.transform = 'scale(1.05) rotate(2deg)';
        photo.style.transition = 'all 0.3s ease';
    });
    
    photo.addEventListener('mouseleave', () => {
        photo.style.transform = 'scale(1) rotate(0deg)';
    });
}

// Create floating hearts around the page
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.bottom = '-50px';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    heart.style.zIndex = '1000';
    heart.style.pointerEvents = 'none';
    heart.style.opacity = '0.7';
    
    document.body.appendChild(heart);
    
    const duration = Math.random() * 3000 + 3000;
    const drift = (Math.random() - 0.5) * 100;
    
    setTimeout(() => {
        heart.style.transition = `all ${duration}ms ease-out`;
        heart.style.bottom = '110vh';
        heart.style.transform = `translateX(${drift}px)`;
        heart.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
        heart.remove();
    }, duration + 100);
}

// Create floating hearts periodically
setInterval(createFloatingHeart, 800);
