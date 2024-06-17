import { FC } from 'react';
import MemoInput from './components/ui/MemoInput';
import MemoCards from './fetures/Memo/components/MemoCards';
import Providers from './Providers';
import { Home } from 'lucide-react';

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
