import React from 'react';

import UnAuthenticatedRoutes from './UnAuthenticatedRoutes';
// import AuthenticatedRoutes from './AuthenticatedRoutes';

export const Router: React.FC = () => {
  return (
    <>
      <UnAuthenticatedRoutes />
    </>
  );
};
