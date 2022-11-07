import { useState } from 'react'
import style from './MenuSetting.module.scss'
import classnames from 'classnames'
import settingImg from '../../assets/Img/setting.svg'
import closeImg from '../../assets/Img/close.svg'

// Component
import SetNumOfSess from "./SetNumOfSess/SetNumOfSess"
import SetTime from "./SetTime/SetTime"


const MenuSetting = ({changeTime,breakTime,formatTime,sessionTime,numOfsessbeforeBreak,sessNumBeforeLongBreak,longerBreak}) => {
  const {open_btn_cont,inner_menu_cont,active_menu,setting_img,simple_setting,advanced_setting,info_advanced,btn_close} = style

  const [isActiveMenu,setIsActiveMenu] = useState(false)

  return (
    <>
      <div className={open_btn_cont}>
        <button onClick={()=>setIsActiveMenu(true)}><img src={settingImg} alt='setting' className={setting_img}/></button>
      </div>
      
      <div className={classnames(inner_menu_cont,{[active_menu]:isActiveMenu})}>

        {/* Simple Setting */}
        <div className={simple_setting}>
          <SetTime 
            title={'Break'} 
            changeTime={changeTime} 
            type={'break'} 
            time={breakTime} 
            formatTime={formatTime}
          />
          <SetTime 
            title={'Session'} 
            changeTime={changeTime} 
            type={'session'} 
            time={sessionTime} 
            formatTime={formatTime}
          />
        </div>
    
        {/* Advanced Setting */}
        <h3 className={info_advanced}>Add a longer break after a certain number of sessions</h3>
        <div className={advanced_setting}>
            <SetNumOfSess
              numOfsessbeforeBreak={numOfsessbeforeBreak}
              sessNumBeforeLongBreak={sessNumBeforeLongBreak}
            />
            <SetTime 
              title = {'Break'}
              changeTime={changeTime} 
              type={'longerBreak'} 
              time={longerBreak} 
              formatTime={formatTime}
            />
        </div>
        
        <button onClick={()=>setIsActiveMenu(false)} className={btn_close}><img src={closeImg} alt='CLOSE' width={'100%'} height={'100%'}/></button>

      </div>
    </>
  )
}

export default MenuSetting