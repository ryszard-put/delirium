import React from 'react';
import { Router } from '@reach/router';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/404';
import App from './App';

const MainRouter = () => {
  return (
    <Router>
      <Home path='/' />
      <SignIn path='/signin' />
      <App path='/app'>
        <Dashboard path='dashboard' />
      </App>
      <NotFound default />
    </Router>
  );
};

export default MainRouter;
