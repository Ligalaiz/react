import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
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
