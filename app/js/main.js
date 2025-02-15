alert("For starting the timer [press OK / press Space] key on your keyboard.");

var secondsCounter = 0;
var timerDisplay = document.getElementById("seconds-counter");
var timerInterval;

function incrementSeconds() {
    secondsCounter++;
    timerDisplay.innerText = secondsCounter + " seconds";
}

timerInterval = setInterval(incrementSeconds, 1000);

window.onload = function () {
    var seconds = 0;
    var tens = 0;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };

    buttonStop.onclick = function () {
        clearInterval(Interval);
    };

    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = 0;
        seconds = 0;
        appendTens.innerHTML = "00";
        appendSeconds.innerHTML = "00";
    };

    function startTimer() {
        tens++;
        appendTens.innerHTML = tens < 10 ? "0" + tens : tens;

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
            tens = 0;
            appendTens.innerHTML = "00";
        }
    }
};

// Day/Night Mode Toggle
const iconMoon = document.querySelector(".night");
const iconSun = document.querySelector(".day");
const body = document.body;
const textMode = document.querySelector(".text-mode");
const line = document.getElementById("line");
const buttons = document.querySelectorAll(".button");

// Initial State
iconMoon.style.display = "block";
iconSun.style.display = "none";

document.querySelector(".toggle-btn").addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("active");

    if (body.classList.contains("dark")) {
        // Switch to Day Mode
        iconMoon.style.display = "none";
        iconSun.style.display = "block";
        textMode.innerHTML = "☀️ Day Mode";
        textMode.style.color = "white";
        line.style.borderTop = "1.5px solid black";

        // Change button styles for Day Mode
        buttons.forEach(button => {
            button.style.boxShadow = "0px 0px 12px orange";
            button.style.borderColor = "black";
            button.style.setProperty("--button-hover", "#ff8800");
            button.style.color = "black";
        });

    } else {
        // Switch to Night Mode
        iconMoon.style.display = "block";
        iconSun.style.display = "none";
        textMode.innerHTML = "🌙 Night Mode";
        textMode.style.color = "yellow";
        line.style.borderTop = "1.5px solid white";

        // Change button styles for Night Mode
        buttons.forEach(button => {
            button.style.boxShadow = "0px 0px 12px white";
            button.style.borderColor = "white";
            button.style.setProperty("--button-hover", "#0086e0");
            button.style.color = "white";
        });
    }
});
