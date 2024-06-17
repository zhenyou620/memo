import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const Home = (): ReactElement => {
  return (
    <div>
      <div>Home</div>
      <Link to="/memo">Memo</Link>
    </div>
  );
};

export default Home;
