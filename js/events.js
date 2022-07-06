
import{  buttonPause,
    buttonPlay,
    buttonStop,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn,
    } from "./elements.js"
export function events({controls,timer,Sound}){
buttonPlay.addEventListener('click',function(){
    controls.play()
    timer.countdonw()
    Sound.pressAudio()
    
    })
    
    buttonStop.addEventListener('click',function(){
    timer.reset()
    controls.reset()
    Sound.pressAudio()
    timer.updateDisplay(newMinutes,0)
    
    })
    
    buttonPause.addEventListener('click',function(){
    controls.pause()
    timer.holdTimer()
    Sound.pressAudio()
    })
    
    buttonSoundOn.addEventListener('click',function(){
    controls.soundOn()
    Sound.bgAudio.play()
    })
    
    buttonSoundOff.addEventListener('click',function(){
    controls.soundOff()
    Sound.bgAudio.pause()
    })
    
    buttonSet.addEventListener('click',function(){
        let newMinutes= controls.getMinutes()
    
        if(!newMinutes){
            timer.reset()
            
            return
    
        }
      
        timer.updateDisplay(newMinutes,0)
        timer.updateMinutes(newMinutes)
       
    })
   

}