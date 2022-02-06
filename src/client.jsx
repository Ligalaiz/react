import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderAppUtils } from './utils/renderApp.utils';
import { store } from './store';
import './utils/firebase.utils';

const run = () => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>{renderAppUtils()}</BrowserRouter>
    </Provider>,
    document.getElementById('root'),
  );
};

run();
