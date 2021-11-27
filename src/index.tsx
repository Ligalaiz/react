import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import { globalStyle } from '@src/styles';
import { AppRouter } from '@components/AppRouter';

ReactDOM.render(
  <Router>
    <Global styles={globalStyle} />
    <App>
      <AppRouter />
    </App>
  </Router>,
  document.getElementById('root'),
);
