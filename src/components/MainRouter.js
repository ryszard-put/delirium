import React from 'react';
import { Router } from '@reach/router';

import Home from '../pages/Home';
// import SignIn from '../pages/SignIn';
// import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/404';
import SecuredRoutes from './SecuredRoutes';
import SocketTest from '../pages/SocketTest';

const MainRouter = () => {
  return (
    <Router>
      <Home path='/' />
      <SecuredRoutes path='/app'>
        <Dashboard path='dashboard' />
        <SocketTest path='/socket' />
      </SecuredRoutes>
      <NotFound default />
    </Router>
  );
};

export default MainRouter;
