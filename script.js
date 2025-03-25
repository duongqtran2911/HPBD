document.addEventListener('DOMContentLoaded', () => {
    const postcard = document.querySelector('.postcard');
    
    postcard.addEventListener('click', () => {
        postcard.classList.toggle('flipped');
    });

    // Add some random floating hearts
    const floatingHearts = document.querySelector('.floating-hearts');
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('span');
        heart.textContent = '❤️';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        floatingHearts.appendChild(heart);
    }
}); 