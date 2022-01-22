import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@components/Header';

const Layout: FC = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export { Layout };
