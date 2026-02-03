import './styles/theme.css';
import './styles/global.css';

import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider.tsx';
import { MessageContainer } from './components/MessageContainer/index.tsx';
import { MainRouter } from './routers/MainRouter/index.tsx';

export function App() {
  return (
    <TaskContextProvider>
      <MessageContainer>
        <MainRouter />
      </MessageContainer>
    </TaskContextProvider>
  );
}
