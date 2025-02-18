const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreElement = document.getElementById("score");
let score = 0;

// پرش دایناسور
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        jump();
    }
});

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
        setTimeout(() => {
            dino.classList.remove("jump");
        }, 500);
    }
}

// تشخیص برخورد
let checkCollision = setInterval(() => {
    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    let cactusRight = parseInt(window.getComputedStyle(cactus).getPropertyValue("right"));

    if (cactusRight > 50 && cactusRight < 90 && dinoBottom <= 40) {
        alert("بازی تموم شد! امتیاز شما: " + score);
        score = 0;
        scoreElement.innerText = score;
    } else {
        score++;
        scoreElement.innerText = score;
    }
}, 10);