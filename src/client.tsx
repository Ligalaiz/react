import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';
import { globalStyle } from '@src/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderAppUtils } from './utils/renderApp.utils';
import { store } from './store';

const run = () => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <Global styles={globalStyle} />
      <Router>{renderAppUtils()}</Router>
    </Provider>,
    document.getElementById('root'),
  );
};

run();
