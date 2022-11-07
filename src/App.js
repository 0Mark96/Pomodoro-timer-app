import { useEffect, useState } from "react";
import breakAudio from './assets/audio/breakAudio.mp3'
import sessionAudio from './assets/audio/sessionAudio.mp3'
// COMPONENT
import ResultScreen from "./Component/ResultScreen/ResultScreen";
import TimerControl from "./Component/TimerControll/TimerControl";
import MenuSetting from "./Component/MenuSetting/MenuSetting";
function App() {

// STATE
  const [displayTime,setDisplayTime] = useState(25 * 60)
  const [breakTime,setBreakTime] = useState(5 * 60)
  const [sessionTime,setSessionTime] = useState(25 * 60)
  const [timerOn,setTimerOn] = useState(false)
  const [onBreak,setOnBreak] = useState(false)
  const [NumOfSession,setNumOfSession] = useState(0)
  // advanced setting state
  const [sessNumBeforeLongBreak,setSessNumBeforeLongBreak] = useState(0)
  const [longerBreak,setLongerBreak] = useState(7 * 60)
  //state for animation
  const [onSession,setOnSession] = useState(false)
 
  // Run timer each second and if neither condition is true, subtract the time by -1

  useEffect(()=>{
   
    let interval;
    if(timerOn ){
     interval = setInterval(()=>{
           setDisplayTime(prev => {
            if(prev <= 0 && !onBreak){ // End of session
              playAudio('break')
              setOnBreak(true)
              setOnSession(false)
              setNumOfSession(NumOfSession + 1 )
              if((NumOfSession + 1) % sessNumBeforeLongBreak === 0  && sessNumBeforeLongBreak !== 0 ){ // If session before long break is setted
                return longerBreak
              }
              return breakTime
            } else if(prev <= 0 && onBreak){ // End of Break
              playAudio()
              setOnBreak(false)
              setOnSession(true)
              return sessionTime
             }else{ 
              return  prev - 1 
             }
           
          })
      },100)// run each second
    }
    
    return ()=> clearInterval(interval)

  },[timerOn,displayTime,breakTime,onBreak,sessionTime,NumOfSession,sessNumBeforeLongBreak,longerBreak])
  
  // Set desired time for session,break and longer break

  const changeTime = (amount,type)=>{
   
    if(type === 'break'){
      if (breakTime <= 60 && amount < 0){ 
        return 
      }
      setBreakTime(prev => prev + amount)
    }
    else if(type === 'longerBreak'){
      if (longerBreak <= 60 && amount < 0){
        return
      }
      setLongerBreak(prev => prev + amount)
    }
    else{
      if (sessionTime <= 60 && amount < 0){
        return 
      }
      setSessionTime(prev => prev + amount)
      setTimerOn(false)
      setDisplayTime(sessionTime + amount)
    }
  }

  // Button reset

  const resetTime = () => {
    setDisplayTime(25 * 60)
    setBreakTime(5 * 60)
    setSessionTime(25 * 60)
    setOnBreak(false)
    setTimerOn(false)
  }

 // advanced setting (set Number of session before long break)

  const numOfsessbeforeBreak = (amount) =>{
    if(sessNumBeforeLongBreak <= 0 && amount < 0){
      return
    }else{
      setSessNumBeforeLongBreak(prev => prev + amount)
    }
  }

  // Change number in standard format time

  const formatTime = (time)=>{
    let minutes = Math.floor(time/60)
    let seconds = time % 60
    
    return  (minutes < 10 ? '0' + minutes : minutes)
    + ':' + (seconds < 10 ? '0' + seconds : seconds)
  }

  // Happy audio on break start, Sad audio on session start
  
  const playAudio = (type) => {
    let audio = type === 'break' ? breakAudio : sessionAudio
    return new Audio(audio).play()
  }


  return (
    <div className='app'>
     <ResultScreen 
      onBreak={onBreak}
      onSession={onSession}
      formatTime={formatTime}
      displayTime={displayTime}
      NumOfSession={NumOfSession}
      timerOn={timerOn}
     />

     <TimerControl 
      setTimerOn={setTimerOn}
      timerOn={timerOn}
      resetTime={resetTime}
     />
    
    <MenuSetting 
      changeTime={changeTime} 
      breakTime={breakTime} 
      formatTime={formatTime} 
      sessionTime={sessionTime} 
      numOfsessbeforeBreak={numOfsessbeforeBreak} 
      sessNumBeforeLongBreak={sessNumBeforeLongBreak} 
      longerBreak={longerBreak}
    />
</div>
  )
}

export default App;



