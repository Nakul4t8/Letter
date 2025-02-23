// Reveal Messages One by One
document.addEventListener("DOMContentLoaded", () => {
    const messages = document.querySelectorAll(".letter p");
    messages.forEach((msg, index) => {
        setTimeout(() => {
            msg.classList.add("revealed");
        }, index * 1500);
    });
});

// Secret Message Reveal
document.getElementById("revealBtn").addEventListener("click", () => {
    document.getElementById("secretMessage").style.opacity = 1;
});

// Photo Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

showSlides();

// Floating Hearts Animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.getElementById("hearts-container").appendChild(heart);

    let left = Math.random() * window.innerWidth;
    let size = Math.random() * 20 + 10;
    let duration = Math.random() * 3 + 2;

    heart.style.left = `${left}px`;
    heart.style.fontSize = `${size}px`;
    heart.style.animationDuration = `${duration}s`;

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 300);

// Background Music Auto-Play on First Click
document.addEventListener("click", () => {
    document.getElementById("bg-music").play();
}, { once: true });