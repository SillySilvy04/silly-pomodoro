import { useReducer, useEffect, useRef } from 'react';
import { initialTaskState } from './initialTaskState';
import { taskReducer } from './taskReducer';
import { TaskContext } from './TaskContext';
import { TimerWorkerManager } from '../../workers/TimerWorkerManager';
import { loadBeep } from '../../utils/loadBeep';
import type { TaskStateModel } from '../../models/TaskStateModel';

type TextContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TextContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
    const storageState = localStorage.getItem('taskState');

    if (storageState === null) return initialTaskState;

    const parsedStorageState = JSON.parse(storageState) as TaskStateModel;

    return {
      ...parsedStorageState,
      activeTask: null,
      secondsRemaining: 0,
      formattedSecondsRemaining: '00:00',
    };
  });
  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

  const worker = TimerWorkerManager.getInstance();

  // eslint-disable-next-line react-hooks/refs
  worker.onmessage(e => {
    const countDownSeconds = e.data;

    if (countDownSeconds <= 0) {
      if (playBeepRef.current) {
        playBeepRef.current();
        playBeepRef.current = null;
      }
      dispatch({ type: 'COMPLETE_TASK' });
      worker.terminate();
    } else {
      dispatch({
        type: 'COUNT_DOWN',
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    localStorage.setItem('taskState', JSON.stringify(state));

    if (!state.activeTask) {
      worker.terminate();
    }

    document.title = `${state.formattedSecondsRemaining} - silly-pomodoro`;

    worker.postMessage(state);
  }, [worker, state]);

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
