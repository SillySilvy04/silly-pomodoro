import style from './style.module.css';

import { DefaultInput } from '../DefaultInput';

export function Form() {
  return (
    <form className={style.form} action=''>
      <div className={style.formRow}>
        <DefaultInput
          id='input'
          type='text'
          placeholder='digite digite'
        ></DefaultInput>
      </div>

      <div className={style.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className={style.formRow}>
        <p className={style.formRow}>Ciclos</p>
        <p className={style.formRow}>0 0 0 0 0 0</p>
        <button className={style.formRow}>Enviar</button>
      </div>
    </form>
  );
}
