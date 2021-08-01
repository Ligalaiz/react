import '../styles/index.scss';
import { APARTMENTS } from '../data/data';
import Dashboard from './dashboard/Dashboard';
import '../assets/animations/TweenLite.min';
import '../assets/animations/EasePack.min';
import '../assets/animations/rAF';
import '../assets/animations/config';

const App = () => <Dashboard apartments={APARTMENTS} />;

export default App;
