import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';

import AppRouter from './components/appRouter/appRouter';

ReactDOM.render(
  <Router>
    <App>
      <AppRouter />
    </App>
  </Router>,
  document.getElementById('root'),
);
