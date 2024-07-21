import { FC } from 'react';
import { Memo } from './features/Memo';
import { TaskBox } from './features/TaskBox';
import { MemoProvider } from './providers/MemoProvider';

const App: FC = () => {
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
