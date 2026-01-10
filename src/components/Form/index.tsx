import style from './style.module.css';

import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';

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
        <Cycles></Cycles>
        <button className={style.formRow}>Enviar</button>
      </div>
    </form>
  );
}
