import style from '../../MenuSetting/SetTime/SetTime.module.scss'
import minusImg from '../../../assets/Img/minus.svg'
import plusImg from '../../../assets/Img/plus.svg'

const SetNumOfSess = ({numOfsessbeforeBreak,sessNumBeforeLongBreak}) => {
  const {wrapper,set_name,btn_wrapper,set_btn,set_time,set_img} = style
  return (
    <div className={wrapper}>
      <h1 className={set_name}>Session</h1>
      <div className={btn_wrapper}>
      <button onClick={()=>numOfsessbeforeBreak(1)} className={set_btn}><img src={plusImg} alt='+' className={set_img}/></button>
        <h1 className={set_time}>{sessNumBeforeLongBreak}</h1>
      <button onClick={()=>numOfsessbeforeBreak(-1)} className={set_btn}><img src={minusImg} alt='+' className={set_img}/></button>  
      </div>
    </div>
  )
}

export default SetNumOfSess