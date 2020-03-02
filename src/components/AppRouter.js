import React from 'react';
import { Router } from '@reach/router';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import NotFound from '../pages/404';

const AppRouter = () => {
  return (
    <Router>
      <Home path='/' />
      <SignIn path='/signin' />
      <NotFound default />
    </Router>
  );
};

export default AppRouter;
