import style from './style.module.css';

export function Cycles() {
  return (
    <div className={style.cycles}>
      <span>Ciclos:</span>

      <div className={style.cycleDots}>
        <span className={`${style.cicleDot} ${style.workTime}`}></span>
        <span className={`${style.cicleDot} ${style.shortBreakTime}`}></span>
        <span className={`${style.cicleDot} ${style.workTime}`}></span>
        <span className={`${style.cicleDot} ${style.shortBreakTime}`}></span>
        <span className={`${style.cicleDot} ${style.workTime}`}></span>
        <span className={`${style.cicleDot} ${style.shortBreakTime}`}></span>
        <span className={`${style.cicleDot} ${style.workTime}`}></span>
        <span className={`${style.cicleDot} ${style.longBreakTime}`}></span>
      </div>
    </div>
  );
}
