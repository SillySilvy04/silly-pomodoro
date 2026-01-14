import style from './style.module.css';

import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import React, { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskAction';
import { Tips } from '../Tips';

export function Form() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  //definição de ciclos
  const nextCycleType = getNextCycleType(state.currentCycle + 1);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (taskName === '') {
      alert('favor digitar o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }

  function handleStopCurrentTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
    <form onSubmit={handleCreateNewTask} className={style.form} action=''>
      <div className={style.formRow}>
        <DefaultInput
          id='input'
          type='text'
          placeholder='digite digite'
          ref={taskNameInput}
          disabled={!!state.activeTask}
        ></DefaultInput>
      </div>

      <div className={style.formRow}>
        <Tips></Tips>
      </div>

      {state.currentCycle > 0 && (
        <div className={style.formRow}>
          <Cycles></Cycles>
        </div>
      )}

      <div className={style.formRow}>
        {!state.activeTask ? (
          <DefaultButton
            aria-label='iniciar nova tarefa'
            title='iniciar nova tarefa'
            type='submit'
            icon={<PlayCircleIcon />}
            color='green'
            key='submit_button'
          />
        ) : (
          <DefaultButton
            aria-label='encerrar nova tarefa'
            title='encerrar nova tarefa'
            type='button'
            icon={<StopCircleIcon />}
            color='red'
            onClick={handleStopCurrentTask}
          />
        )}
      </div>
    </form>
  );
}
