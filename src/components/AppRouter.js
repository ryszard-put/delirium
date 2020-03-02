import React from 'react';
import { Router } from '@reach/router';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import NotFound from '../pages/404';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  return (
    <Router>
      <Home path='/' />
      <SignIn path='/signin' />
      <PrivateRoute path='/app/dashboard' component={Dashboard} />
      <NotFound default />
    </Router>
  );
};

export default AppRouter;
