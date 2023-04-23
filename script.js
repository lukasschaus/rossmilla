const backgroundImages = [
    'bg.png',
    'bg2.png',
    'bg3.png',
    'bg4.png',
    'bg5.png'
];

let currentBackground = 0;

function changeBackground() {
    const background = document.querySelector('.background');
    background.style.backgroundImage = `url('${backgroundImages[currentBackground]}')`;
    currentBackground = (currentBackground + 1) % backgroundImages.length;
}

function randomMovement() {
    const xOffset = Math.random() * 20 - 10;
    const yOffset = Math.random() * 20 - 10;

    const background = document.querySelector('.background');
    background.style.backgroundPosition = `calc(50% - ${xOffset}px) calc(50% - ${yOffset}px)`;
}

window.addEventListener('load', () => {
    changeBackground(); // Set the initial background image
    
    const background = document.querySelector('.background');
    background.style.transition = 'background-position 1s ease';

    setInterval(randomMovement, 1000);
    setInterval(changeBackground, 10000); // Change the background every 10 seconds
    });

// Modify the randomTextPosition() function
function randomTextPosition() {
    const xPos = Math.random() * (window.innerWidth - 200);
    const yPos = Math.random() * (window.innerHeight - 50);

    const text = document.querySelector('.text');
    text.style.left = `${xPos}px`;
    text.style.top = `${yPos}px`;

    // Add this code to update the color of each letter one by one
    const pastelColors = [
        "#b8d7a3",
        "#c1d5b4",
        "#b4c7d4",
        "#c3d4df",
        "#eccfd9",
        "#d8c8e1",
        "#bfa77f",
        "#9c8f72"
    ];
    let coloredText = '';

    for (let i = 0; i < text.textContent.length; i++) {
        const color = pastelColors[Math.floor(Math.random() * pastelColors.length)];
        coloredText += `<span style="color: ${color};">${text.textContent[i]}</span>`;
    }

    text.innerHTML = coloredText;
}

// Call randomTextPosition() at the same interval as randomMovement()
setInterval(randomTextPosition, 1000);
