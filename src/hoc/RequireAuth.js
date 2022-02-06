import React from 'react';
import { authCheckUtils } from '@root/utils/authCheck.utils';
import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequireAuth = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const currentUserStatus = authCheckUtils(user);

  if (!currentUserStatus) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export { RequireAuth };
