/** @jsxImportSource @emotion/react */
import { Dashboard } from '@components/Dashboard';
import { APARTMENTS } from '@src/data';
import { FC } from 'react';

export const App: FC = () => {
  return <Dashboard apartments={APARTMENTS} />;
};
