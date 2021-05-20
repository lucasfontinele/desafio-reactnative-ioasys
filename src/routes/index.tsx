import React from 'react';

import { useSelector } from 'react-redux';
import { ApplicationState } from '../store/createStore';

import UnAuthenticatedRoutes from './UnAuthenticatedRoutes';
import AuthenticatedRoutes from './AuthenticatedRoutes';

export const Router: React.FC = () => {
  const { isSignedIn } = useSelector((state: ApplicationState) => state.auth);

  return (
    <>
      {isSignedIn ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes /> }
    </>
  );
};
