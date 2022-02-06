import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderAppUtils } from './utils/renderApp.utils';
import { store } from './store';
import './utils/firebase.utils';

ReactDOM.render(
  <Provider store={store}>
    <Router>{renderAppUtils()}</Router>
  </Provider>,
  document.getElementById('root'),
);
