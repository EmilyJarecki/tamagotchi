const tick = document.querySelector("#timerCount");
const startTimer = document.querySelector("#startTimer");

function reset() {
  clearInterval(interval);
  tick.textContent = 0;
  startTimer.disabled = false;
}

function updateTicks(num) {
  tick.textContent = num;
}

let count = Number(tick.textContent);
startTimer.addEventListener("click", function(){
  interval = setInterval(() => {
    count += 1;
    updateTicks(count); 
  }, 1000);
  startTimer.disabled = true;
});

document.querySelector("#reset").addEventListener("click", reset);



