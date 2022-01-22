import React from 'react';
import { AppRouter } from '@components/AppRouter';
import { App } from '../App';

const renderAppUtils = () => {
  return (
    <App>
      <AppRouter />
    </App>
  );
};

export { renderAppUtils };
