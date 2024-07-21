import { FC } from 'react';
import { Memo } from './features/Memo';
import { MemoProvider } from './providers/MemoProvider';

const App: FC = () => {
  return (
    <MemoProvider>
      <div className="mx-8">
        <Memo></Memo>
      </div>
    </MemoProvider>
  );
};

export default App;
