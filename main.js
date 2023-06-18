let milli = 0;
var seconds = 0;
var min = 0;

const start = document.querySelector(".startBtn");
const Stop = document.querySelector(".stopBtn");
const reset = document.querySelector(".resetBtn");
const ms = document.querySelector(".milliSeconds");
const Sec = document.querySelector(".seconds");
const mins = document.querySelector(".mins");
var timing;
let running = false;
function Start() {
  running = true;

  milli++;
  if (milli <= 9) {
    ms.innerHTML = "0" + milli;
  } else if (milli > 9) {
    ms.innerHTML = milli;
  }

  if (milli >= 99) {
    seconds++;
    Sec.innerHTML = "0" + seconds;
    milli = 0;
  }
  if (seconds > 9) {
    Sec.innerHTML = seconds;
  }
  if (seconds > 59) {
    seconds = 0;
    min++;
    mins.innerHTML = "0" + min;
  }
  if (min > 9) {
    mins.innerHTML = min;
  }
}

start.addEventListener("click", () => {
  if (running == false) {
    timing = setInterval(Start, 10);
  }
});
reset.addEventListener("click", () => {
  running = false;
  clearInterval(timing);
  milli = 0;
  seconds = 0;
  min = 0;
  ms.innerHTML = "0" + milli;
  Sec.innerHTML = "0" + seconds;
  mins.innerHTML = "0" + min;
});

Stop.addEventListener("click", () => {
  running = false;
  clearInterval(timing);
});
