import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { set } from './utils';

export const App: FC<React.ReactNode> = ({ children }) => {
  const location = useLocation();
  set('currentLocation', location);

  return <>{children}</>;
};
