import React from 'react';
import { App } from '../App';
import { AppRouter } from '../components/appRouter/appRouter';

const renderAppUtils = () => {
  return (
    <App>
      <AppRouter />
    </App>
  );
};

export { renderAppUtils };
