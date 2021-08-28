import AppRouter from '@components/appRouter/appRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '@root/store';
import App from './App';

export const All = () => {
  return (
    <Router>
      <Provider store={store}>
        <App>
          <AppRouter />
        </App>
      </Provider>
    </Router>
  );
};

ReactDOM.render(
  <All />,
  document.getElementById('root') || document.createElement('div'),
);
