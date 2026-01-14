import { createContext } from 'react';
import { initialTaskState } from './initialTaskState';
import type { TaskStateModel } from '../../models/TaskStateModel';
import type { TaskActionModel } from './taskAction';

type TextContextProviderProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

const initialContextProviderValue = {
  state: initialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TextContextProviderProps>(
  initialContextProviderValue,
);
