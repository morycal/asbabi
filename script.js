const hippo = document.getElementById("hippo");
const obstacle = document.getElementById("obstacle");
const scoreElement = document.getElementById("score");
let score = 0;

// پرش اسب آبی
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        jump();
    }
});

function jump() {
    if (hippo.classList != "jump") {
        hippo.classList.add("jump");
        setTimeout(() => {
            hippo.classList.remove("jump");
        }, 500);
    }
}

// تشخیص برخورد
let checkCollision = setInterval(() => {
    let hippoBottom = parseInt(window.getComputedStyle(hippo).getPropertyValue("bottom"));
    let obstacleRight = parseInt(window.getComputedStyle(obstacle).getPropertyValue("right"));

    if (obstacleRight > 50 && obstacleRight < 90 && hippoBottom <= 40) {
        alert("بازی تموم شد! امتیاز شما: " + score);
        score = 0;
        scoreElement.innerText = score;
    } else {
        score++;
        scoreElement.innerText = score;
    }
}, 10);