# tamagotchi
Wireframe:(https://github.com/EmilyJarecki/tamagotchi/files/9998507/CamScanner.11-13-2022.16.53.pdf)

Purpose: to keep your pet alive for as long as possible. 

"When I load the page, I will see _____, and they will be in _______ state".

User Story: 
1. When the user inputs name then clicks "submit name", the input field and submit button disappear and only the name remains. 
2. When the user inputs age then clicks "submit age", the input field and submit button disappear and only the age remains underneath an "age" label.
3. When the "start" button is clicked, the timer increases on a per second interval while the other elements (age, hunger, sleepiness, and boredom increase at individualized intervals. 
4. When the "feed" button is clicked, one level is subtracted from the hunger element while the game is in progress. 
5. When the "lights out" button is clicked, one level is subtracted from the sleepiness element while the game is in progress. 
6. When the "play" button is clicked, one level is subtracted from the boredom element while the game is in progress. 
7. When the "reset" button is clicked, all levels will return to "0" and remain still. 

Unsolved Problems:
The user can begin the game without inputting their name or age. 
When the reset button is clicked, then start, the levels do not start from "0" but from the previous state. 
When the timer goes beyond a minute, it continues to reflect in seconds. 

Triumphs:
Getting all levels to stop at the same time by creating an interval function than allows the timer variable to be defined in the global scope.

Challenges: 
The syntax for setting an interval. 
Having a field disappear in a desired moment. 
HTML organizing. 

Words of Wisdom: 
Do not create too manhy functions. It might make it harder to extract a variable. 
Master the function or feature in its most simple form. 
Console.log() at every step.

Code Snippets: 

startTimer.addEventListener("click", function(){
    hungerInterval = setInterval(() => {
      num++
      hungerLevel(num)
      if (num>=10){
        reset()
        document.querySelector(".lion_tamagotchi").textContent = "💀"
      }
    }, 1000)
  })
	
	
	feedBtn.addEventListener("click", function(){
    if (num>0){
        hungerLevel(num--) 
    }
})
