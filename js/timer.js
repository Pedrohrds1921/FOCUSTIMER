import { sounds } from "./sonds.js"
export function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls,

    
 
}){


let timeTimerOut
let minutes= Number(minutesDisplay.textContent)

function reset(){
    updateDisplay(minutes,0)
    clearTimeout(timeTimerOut)


}
function countdonw(){
    timeTimerOut= setTimeout(function(){
          let seconds = Number(secondsDisplay.textContent)
          let minutes = Number(minutesDisplay.textContent)
          let isFinished = minutes <= 0 && seconds <= 0

    

          if(isFinished){
              resetControls()
              updateDisplay() 
              sounds().timerEnd()

              return
          }
  
          if (seconds <= 0){
              seconds= 60
              minutes--
          } 
          
          updateDisplay(minutes,seconds-1)
  
      countdonw()
      },1000)
      
  }

  function  holdTimer(){
    clearTimeout(timeTimerOut)
  }

  function updateMinutes(newMinutes){
      minutes=newMinutes
  }

function updateDisplay(newMinutes, seconds){
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2,"0")
    secondsDisplay.textContent = String(seconds).padStart(2,"0")
}  


return{
    countdonw,
    reset,
    updateDisplay,
    updateMinutes,
    holdTimer,
   
}
}