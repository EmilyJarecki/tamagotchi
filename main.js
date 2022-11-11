//////////////TIMER///////////////////////////////
const tick = document.querySelector("#timerCount");
const startTimer = document.querySelector("#startTimer");

function reset() {
  clearInterval(interval)
  tick.textContent = 0
  startTimer.disabled = false
}

function updateTicks(num) {
  tick.textContent = num
}
let count = Number(tick.textContent)

startTimer.addEventListener("click", function(){
  interval = setInterval(() => {
    count += 1
    updateTicks(count)
  }, 1000)
  startTimer.disabled = true
})
document.querySelector("#reset").addEventListener("click", reset)

///////////////////////////////////////////////////
const hungerMetric = document.getElementById("hunger_metric")
const getHungryBtn = document.getElementById("feed")

let num = Number(hungerMetric.textContent)

function hungerLevel(num) {
    hungerMetric.textContent = num
}

function countUp () {
    let timerID = setInterval(()=>{
        num++
        hungerLevel(num)
        if (num >= 10){
            clearInterval(timerID)
            alert("I'm dead")
        }
    }, 2000) 
}

startTimer.addEventListener("click", countUp)
