import style from './style.module.css';

import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';

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
      </div>

      <div className={style.formRow}>
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
      </div>
    </form>
  );
}
