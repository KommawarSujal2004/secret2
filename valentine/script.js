const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
let noClickCount = 0;

// When Yes is clicked
yesBtn.addEventListener('click', () => {
    // Add a heart explosion effect before redirecting
    createHeartExplosion();
    
    setTimeout(() => {
        window.location.href = 'surprise.html';
    }, 1000);
});

// When No is clicked
noBtn.addEventListener('click', () => {
    noClickCount++;
    
    // Increase Yes button size
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize + 5) + 'px';
    yesBtn.style.padding = (15 + noClickCount * 3) + 'px ' + (40 + noClickCount * 5) + 'px';
    
    // Shake animation for no button
    noBtn.style.animation = 'shake 0.5s';
    setTimeout(() => {
        noBtn.style.animation = '';
    }, 500);
    
    // Change No button text based on clicks
    const noTexts = [
        'Are you sure?',
        'Really?',
        'Think again!',
        'You\'re breaking my heart 💔',
        'Last chance!',
        'Please? 🥺',
        'Don\'t be mean!',
        'Yes is better! ❤️'
    ];
    
    if (noClickCount <= noTexts.length) {
        noBtn.textContent = noTexts[noClickCount - 1];
    } else {
        noBtn.textContent = 'Just click Yes! 💕';
    }
});

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// Heart explosion effect
function createHeartExplosion() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.fontSize = Math.random() * 30 + 20 + 'px';
        heart.style.zIndex = '1000';
        heart.style.pointerEvents = 'none';
        
        const angle = (Math.PI * 2 * i) / 30;
        const velocity = Math.random() * 200 + 100;
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.style.transition = 'all 1s ease-out';
            heart.style.left = (window.innerWidth / 2 + Math.cos(angle) * velocity) + 'px';
            heart.style.top = (window.innerHeight / 2 + Math.sin(angle) * velocity) + 'px';
            heart.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
}
