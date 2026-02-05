import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import type React from 'react';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/taskAction';

import styles from './style.module.css';

export function Settings() {
  const { state, dispatch } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();

    const formErrors = [];

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    if (isNaN(workTime)) {
      formErrors.push('tempo de foco deve ser um número');
    }
    if (isNaN(shortBreakTime)) {
      formErrors.push('tempo de descanso curto deve ser um número');
    }
    if (isNaN(longBreakTime)) {
      formErrors.push('tempo de descanso longo deve ser um número');
    }

    if (shortBreakTime <= 0) {
      formErrors.push('tempo de descanso curto deve ser maior que zero');
    }
    if (longBreakTime <= 0) {
      formErrors.push('tempo de descanso longo deve ser maior que zero');
    }
    if (workTime <= 0) {
      formErrors.push('tempo de foco deve ser maior que zero');
    }

    if (shortBreakTime >= workTime) {
      formErrors.push(
        'tempo de descanso curto deve ser menor que o tempo de foco',
      );
    }
    if (longBreakTime <= shortBreakTime) {
      formErrors.push(
        'tempo de descanso longo deve ser maior que o descanso curto',
      );
    }

    if (workTime > 99) {
      formErrors.push('tempo de foco deve ser menor que 100');
    }
    if (shortBreakTime > 30) {
      formErrors.push('tempo de descanso curto deve ser menor ou igual a 30');
    }
    if (longBreakTime > 60) {
      formErrors.push('tempo de descanso longo deve ser menor ou igual a 60');
    }

    if (formErrors.length > 0) {
      formErrors.forEach(error => showMessage.error(error));
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });
    showMessage.success('configurações salvas com sucesso');
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <p style={{ textAlign: 'center' }}>
          Modifique os ajustes conforme sua preferência.
        </p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} action='' className={styles.form}>
          <div className={styles.formRow}>
            <DefaultInput
              id='workTime'
              labelText='foco'
              ref={workTimeInput}
              defaultValue={state.config.workTime.toString()}
              type='number'
            />
          </div>
          <div className={styles.formRow}>
            <DefaultInput
              id='shortBreakTime'
              labelText='descanso curto'
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime.toString()}
              type='number'
            />
          </div>
          <div className={styles.formRow}>
            <DefaultInput
              id='longBreakTime'
              labelText='descanso longo'
              ref={longBreakTimeInput}
              defaultValue={state.config.longBreakTime.toString()}
              type='number'
            />
          </div>
          <div className={styles.formRow}>
            <DefaultButton icon={<SaveIcon />} />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
