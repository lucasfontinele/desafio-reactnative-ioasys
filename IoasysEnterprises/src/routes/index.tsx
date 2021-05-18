import React from 'react';

import UnAuthentiatedRoutes from './UnAuthenticatedRoutes';
// import AuthenticatedRoutes from './AuthenticatedRoutes';

const Router: React.FC = () => {
  return (
    <>
      <UnAuthentiatedRoutes />
      {/* <AuthenticatedRoutes /> */}
    </>
  );
};

export default Router;
