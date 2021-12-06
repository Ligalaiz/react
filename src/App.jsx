import { useLocation } from 'react-router-dom';
import { set } from './utils';
import './styles/index.scss';

const App = ({ children }) => {
  const location = useLocation();
  set('currentLocation', location);

  return <>{children}</>;
};

export { App };
