import './styles/theme.css';
import './styles/global.css';

import { Home } from './pages/home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider.tsx';
import { MessageContainer } from './components/MessageContainer/index.tsx';

export function App() {
  return (
    <TaskContextProvider>
      <MessageContainer>
        <Home />
      </MessageContainer>
    </TaskContextProvider>
  );
}
