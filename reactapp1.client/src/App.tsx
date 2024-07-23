import { FC, useContext } from 'react';
import { Memo } from './features/Memo';
import { Navigation } from './features/Navigation';
import { TaskBox } from './features/TaskBox';
import { navigationContext } from './stores/navigationContext';

const App: FC = () => {
  const { current } = useContext(navigationContext);

  return (
    <div className="mx-40 mt-10">
      <Navigation />
      <div className="mx-8 mt-8">
        {current === 'Memo' ? <Memo /> : <TaskBox />}
      </div>
    </div>
  );
};

export default App;
