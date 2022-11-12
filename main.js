/////////////NAME///////////////////
const nameText = document.getElementById("name")
const nameBtn = document.getElementById("submit_name")
const named = document.getElementById("named")

function insertName(){
    named.innerHTML = nameText.value
}


nameBtn.addEventListener("click", insertName)








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
    if (num>0){
        hungerLevel(num--) 
    }

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
    if(sleepNum > 0){
        sleepLevel(sleepNum--)
    }
})
startTimer.addEventListener("click", sleepUp)
//////////BOREDOM///////
const playMetric = document.getElementById("bored_metric")
const playBtn = document.getElementById("play")

let playNum = Number(playMetric.textContent)

function playLevel(playNum){
    playMetric.textContent = playNum
}

function playUp () {
    let pTimerID = setInterval(()=>{
        playNum++
        playLevel(playNum)
        if (playNum >= 10){
            clearInterval(pTimerID)
        }
    }, 2000) 
}


playBtn.addEventListener("click", function(){
    if (playNum > 0){
        playLevel(playNum--)
    }
})


startTimer.addEventListener("click", playUp)


/////////////AGE//////////////
const txt1 = document.getElementById("tbuser")
const ageBtn = document.getElementById("submit_age")
const output = document.getElementById("output1")

function fun1(){
    output.innerHTML = txt1.value
}
console.log(output.innerHTML)

function growAge(){
    setInterval(() =>{
        output.innerHTML++
    }, 7000)
}

ageBtn.addEventListener("click", fun1)
startTimer.addEventListener("click", growAge)
