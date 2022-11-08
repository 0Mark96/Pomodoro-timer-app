import style from './PomodoroIMG.module.scss';
import classnames from 'classnames';

const PomodoroIMG = ({onBreak,timerOn}) => {
    const {img_cont,pomodoro_eye_left,pomodoro_eye_right,pupils,pomodoro_mounth,teeth,session_eye,session_mounth} = style
    const isSessionTime = !onBreak && timerOn 
    
    return (
    <div className={img_cont}>
        <div className={classnames(pomodoro_eye_left,{[session_eye]:isSessionTime})}><div className={pupils}></div></div>
        <div className={classnames(pomodoro_eye_right,{[session_eye]:isSessionTime})}><div className={pupils}></div></div>
        <div className={classnames(pomodoro_mounth,{[session_mounth]:isSessionTime})}><div className={teeth}></div></div>
    </div>
  )
}

export default PomodoroIMG