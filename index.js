let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let startBtn = document.querySelector(".start-btn");
let pauseBtn = document.querySelector(".pause-btn");
let resetBtn = document.querySelector(".reset-btn");

let countTimer = null;

startBtn.addEventListener("click", () => {
    if (hour.value == 0 && minute.value == 0 && second.value == 0) {
        alert("Please enter time");
        return;
    }

    function startTimer() {
        startBtn.style.display = "none";
        pauseBtn.style.display = "initial";
        countTimer = setInterval(timerFunction, 1000);
    }
    startTimer();
});

pauseBtn.addEventListener("click", () => {
    stopTimer("pause");
});

resetBtn.addEventListener("click", () => {
    hour.value = "";
    minute.value = "";
    second.value = "";
    stopTimer();
});

function timerFunction() {
    if (second.value > 60) {
        minute.value++;
        second.value = parseInt(second.value) - 60;
    }

    if (minute.value > 60) {
        hour.value++;
        minute.value = parseInt(minute.value) - 60;
    }

    minute.value = minute.value > 60 ? 60 : minute.value;

    if (hour.value == 0 && minute.value == 0 && second.value == 0) {
        hour.value = "";
        minute.value = "";
        second.value = "";
        stopTimer();
    }
    else if (second.value != 0) {
        second.value = `${second.value <= 10 ? "0" : ""}${second.value - 1}`;
    }
    else if (minute.value != 0 && second.value == 0) {
        second.value = 59;
        minute.value = `${minute.value <= 10 ? "0" : ""}${minute.value - 1}`;
    } 
    else if (hour.value != 0 && minute.value == 0) {
        minute.value = 60;
        hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
    }
    return;
}

function stopTimer(value) {
    startBtn.innerHTML = value === "pause" ? "Resume" : "Start";
    startBtn.style.display = "initial";
    pauseBtn.style.display = "none";
    clearInterval(countTimer);
}

