import '../styles/index.scss';
import { APARTMENTS } from '../data/data';
import Dashboard from './dashboard/Dashboard';

const App = () => <Dashboard apartments={APARTMENTS} />;

export default App;
