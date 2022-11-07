import style from './TimerControl.module.scss'
import playImg from '../../assets/Img/play.svg'
import pauseImg from '../../assets/Img/pause.svg'
import resetImg from '../../assets/Img/reset.svg'
import circle from '../../assets/Img/circle.svg'

const TimerControl = ({setTimerOn,timerOn,resetTime}) => {
  const {timer_control_cont,btn_control,img_control,reset} = style
  return (
    <div className={timer_control_cont}>
      <button onClick={()=>{setTimerOn(!timerOn)}} className={btn_control}>
        <img src={timerOn ? pauseImg : playImg} alt='play/pause' className={img_control}/>
      </button>
 
      <button onClick={resetTime} className={btn_control}>
        <img src={circle} alt='reset' className={img_control}/>
        <img src={resetImg} alt='reset'  className={reset}/>
      </button>   
  </div>
  )
}

export default TimerControl