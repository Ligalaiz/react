import AppRouter from '@components/appRouter/appRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '@/store';
import App from './App';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App>
        <AppRouter />
      </App>
    </Provider>
  </Router>,
  document.getElementById('root'),
);
