import { FC } from 'react';
import { Memo } from './fetures/Memo';
import Providers from './Providers';
import Home from './fetures/Home/components/Home';

const App: FC = () => {
  return (
    <Providers>
      <div className="mx-8">
        <Memo></Memo>
      </div>
    </Providers>
  );
};

export default App;
