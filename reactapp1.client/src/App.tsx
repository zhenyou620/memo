import { FC } from 'react';
import MemoInput from './components/ui/MemoInput';
import MemoCards from './components/MemoCards';
import Providers from './Providers';

const App: FC = () => {
  return (
    <Providers>
      <div className="mx-8">
        <MemoInput></MemoInput>
        <MemoCards></MemoCards>
      </div>
    </Providers>
  );
};

export default App;
