import '../styles/index.scss';
import { APARTMENTS } from '../data/data';
import Dashboard from './dashboard/Dashboard';

import('../assets/animations/index.animations');

const App = () => <Dashboard apartments={APARTMENTS} />;

export default App;
