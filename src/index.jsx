import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/appRouter/appRouter';
import { store } from './store';

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
