import { useLocation } from 'react-router-dom';
import { set } from './utils';
import React, { FC } from 'react';

export const App: FC<React.ReactNode> = ({ children }) => {
  const location = useLocation();
  set('currentLocation', location);

  return <>{children}</>;
};
