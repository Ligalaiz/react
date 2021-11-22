import { App } from '@components/App';
import { Global } from '@emotion/react';
import { globalStyle } from '@src/styles';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <>
    <Global styles={globalStyle} />
    <App />
  </>,

  document.getElementById('root'),
);
