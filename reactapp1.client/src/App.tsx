import { FC } from 'react';
import MemoInput from './components/ui/MemoInput';
import MemoCards from './features/MemoCards';

const App: FC = () => {
  return (
    <div className="mx-8">
      <MemoInput></MemoInput>
      <MemoCards></MemoCards>
    </div>
  );
};

export default App;
