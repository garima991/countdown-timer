let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let startBtn = document.querySelector(".start-btn");
let pauseBtn = document.querySelector(".pause-btn");
let resetBtn = document.querySelector(".reset-btn");

let countTimer = null;

startBtn.addEventListener("click", () => {
    if(hour.value == 0 && minute.value == 0 && second.value == 0){
        alert("Please enter time");
        return;
    }

    function startTimer(){
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

function timerFunction () {
    let currentSecond = parseInt(second.value);
    let currentMinute = parseInt(minute.value);
    let currentHour = parseInt(hour.value);

    if(currentSecond > 60){
        currentMinute = Math.floor(currentSecond / 60);
        currentSecond -= 60;
    }

    if(currentMinute > 60){
        currentHour = Math.floor(currentMinute / 60);
        currentMinute -= 60;
    }

    if(currentHour == 0 && currentMinute == 0 && currentSecond == 0){
        hour.value = "";
        minute.value = "";
        second.value = "";
        stopTimer();
    }   
    if (currentSecond === 0) {
        if (currentMinute > 0) {
            currentMinute--;
            currentSecond = 59;
        } else if (currentHour > 0) {
            currentHour--;
            currentMinute = 59;
            currentSecond = 59;
        }
    } else {
        currentSecond--;
    }

    hour.value = currentHour < 10 ? `0${currentHour}` : currentHour;
    minute.value = currentMinute < 10 ? `0${currentMinute}` : currentMinute;
    second.value = currentSecond < 10 ? `0${currentSecond}` : currentSecond;

    if(hour.value != 0 && minute.value == 0 && second.value == 0){
        hour.value = parseInt(hour.value) - 1;
        minute.value = 59;
        second.value = 59;
    }

    if(minute.value != 0 && second.value == 0){
        minute.value = parseInt(minute.value) - 1;
        second.value = 59;
    }
}

function stopTimer(value) {
    startBtn.innerHTML = value === "pause" ? "Resume" : "Start";
    startBtn.style.display = "initial";
    pauseBtn.style.display = "none";
    clearInterval(countTimer);
}

