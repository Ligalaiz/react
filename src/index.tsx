import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import { globalStyle } from '@src/styles';
import { AppRouter } from '@components/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Global styles={globalStyle} />
      <App>
        <AppRouter />
      </App>
    </Provider>
  </Router>,
  document.getElementById('root'),
);
