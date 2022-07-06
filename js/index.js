import { events } from "./events.js"
import { Timer } from "./timer.js"
import { Controls } from "./controls.js"
import{ buttonPause,
    buttonPlay,
    buttonStop,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn,
    minutesDisplay,
    secondsDisplay,
} from "./elements.js"

import { sounds } from "./sonds.js"




const Sound= sounds()


const controls = Controls({
    buttonStop,
    buttonSet,
    buttonPause,
    buttonPlay,
    buttonSoundOn,
    buttonSoundOff, 
})
    
    
const timer=Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls:controls.reset,
  
})
    

events({controls,timer,Sound})

