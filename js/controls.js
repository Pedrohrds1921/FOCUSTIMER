export function Controls({buttonStop,buttonSet,buttonPause,buttonPlay,buttonSoundOn,buttonSoundOff}
   ){
function reset(){
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
     
}

function play(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')

}


function pause(){
buttonPause.classList.add('hide')
buttonPlay.classList.remove('hide')
}

function getMinutes(){

    let newMinutes= prompt('Quantos minutos')
    if(!newMinutes){
        return false
    }

 return newMinutes


}


function soundOn(){
buttonSoundOn.classList.add('hide')       
buttonSoundOff.classList.remove('hide')
}
function soundOff(){
    buttonSoundOn.classList.remove('hide')       
    buttonSoundOff.classList.add('hide')
    }

return{
    reset,
    play,
    pause,
    soundOn,
    soundOff,
    getMinutes,
}
}
