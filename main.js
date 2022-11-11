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

///////////HUNGER////////////////////////////////////////
const hungerMetric = document.getElementById("hunger_metric")
const feedBtn = document.getElementById("feed")

let num = Number(hungerMetric.textContent)

function hungerLevel(num) {
    hungerMetric.textContent = num
}

function hungerUp () {
    let timerID = setInterval(()=>{
        num++
        hungerLevel(num)
        if (num >= 10){
            clearInterval(timerID)
        }
    }, 3000) 
}

feedBtn.addEventListener("click", function(){
    hungerLevel(num--)
})


startTimer.addEventListener("click", hungerUp)
///////////SLEEP///////////////
const sleepMetric = document.getElementById("sleep_metric")
const sleepBtn = document.getElementById("sleep")

let sleepNum = Number(sleepMetric.textContent)

function sleepLevel(sleepNum){
    sleepMetric.textContent = sleepNum
}

function sleepUp () {
    let sTimerID = setInterval(()=>{
        sleepNum++
        sleepLevel(sleepNum)
        if (sleepNum >= 10){
            clearInterval(sTimerID)
        }
    }, 2000) 
}
sleepBtn.addEventListener("click", function(){
    sleepLevel(sleepNum--)
})
startTimer.addEventListener("click", sleepUp)
//////////BOREDOM///////
