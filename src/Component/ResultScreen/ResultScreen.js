import style from './ResultScreen.module.scss'
import PomodoroIMG from './PomodoroIMG/PomodoroIMG'

const ResultScreen = ({onBreak,formatTime,displayTime,NumOfSession,timerOn}) => {
  const {result_screen_cont,type_of_timer,timer,session_numb} = style
  return (
    <div className={result_screen_cont}>
      <PomodoroIMG onBreak={onBreak} timerOn={timerOn}/>
      <h2 className={type_of_timer}>{onBreak ? 'BREAK' : 'SESSION'}</h2>
      <h1 className={timer}>{formatTime(displayTime)}</h1>
      <h3 className={session_numb}>Number of sessions : {NumOfSession}</h3>
   </div>
  )
}

export default ResultScreen