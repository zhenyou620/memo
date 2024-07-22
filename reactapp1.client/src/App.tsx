import { FC, useContext } from 'react';
import { Memo } from './features/Memo';
import { TaskBox } from './features/TaskBox';
import { MemoProvider } from './providers/MemoProvider';
import { navigationContext } from './stores/navigationContext';

const App: FC = () => {
  const { current, updateCurrent } = useContext(navigationContext);

  return (
    <MemoProvider>
      <div className="mx-8">
        <Memo></Memo>
        <TaskBox></TaskBox>
      </div>
    </MemoProvider>
  );
};

export default App;
