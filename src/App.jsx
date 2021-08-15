import { useLocation } from 'react-router-dom';
import Header from './components/header/header';
import { set } from './utils';
import './styles/index.scss';

export default function App({ children }) {
  const location = useLocation();
  set('currentLocation', location);

  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        {children}
      </div>
    </div>
  );
}
