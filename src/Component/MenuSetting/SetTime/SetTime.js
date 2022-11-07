import style from './SetTime.module.scss'
import minusImg from '../../../assets/Img/minus.svg'
import plusImg from '../../../assets/Img/plus.svg'

const SetTime =({title,changeTime,type,time,formatTime})=>{
    const {wrapper,set_name,btn_wrapper,set_btn,set_time,set_img} = style
    
    return (
      <div className= {wrapper}>
        <h1 className={set_name}>{title}</h1>
        <div className={btn_wrapper}>
          <button onClick={()=>changeTime(60,type)} className={set_btn}><img src={plusImg} alt='+' className={set_img}/></button>
          <h1 className={set_time}>{formatTime(time)}</h1>
          <button onClick={()=>changeTime(-60,type)} className={set_btn}><img src={minusImg} alt='-' className={set_img}/></button>
        </div>
      </div>
    )
  }

export default SetTime