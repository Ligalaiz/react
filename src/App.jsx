import { useLocation } from 'react-router-dom';
import { set } from './utils';
import './styles/index.scss';

export default function App({ children }) {
  const location = useLocation();
  set('currentLocation', location);

  return <>{children}</>;
}
