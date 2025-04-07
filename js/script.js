window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Hide the loading screen after 8 seconds
    }, 8000); // 8 seconds
});

document.addEventListener("DOMContentLoaded", () => {
    const diceImages = document.querySelectorAll('.dice-image');
    const resultSpan = document.getElementById('dice-result');
    const refreshPage = document.getElementById('refresh-page');

    // Roll dice functionality
    diceImages.forEach(dice => {
        dice.addEventListener('click', () => {
            const sides = parseInt(dice.getAttribute('data-sides'), 10);
            const result = Math.floor(Math.random() * sides) + 1;
            resultSpan.textContent = result;
        });
    });

    // Add dice roll sound
    const diceRollSound = new Audio('sounds/dice-roll.mp3');
    diceImages.forEach(dice => {
        dice.addEventListener('click', () => {
            diceRollSound.play();
        });
    });

    // Refresh page functionality
    refreshPage.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.reload();
    });

    // Pop animation for the result
    const style = document.createElement('style');
    style.innerHTML = `
    @keyframes pop {
        0% {
            transform: scale(0.5);
            opacity: 0;
        }
        50% {
            transform: scale(1.2);
            opacity: 1;
        }
        100% {
            transform: scale(1);
        }
    }`;
    document.head.appendChild(style);

    // Remove the leftmost dice image (4d)
    const leftmostDice = document.querySelector('.dice-image:first-child');
    if (leftmostDice) {
        leftmostDice.remove();
    }

    // Remove the theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.remove();
    }
});