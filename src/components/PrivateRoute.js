import React from 'react';
import { navigate } from 'gatsby';
import { useAuthRedirect } from '../authentication';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoading, shouldRedirect, to } = useAuthRedirect();
  if (isLoading) {
    return <div>Checking Authentication</div>;
  }

  if (shouldRedirect) {
    navigate(to);
    return null;
  }
  return <Component {...rest} />;
};

export default PrivateRoute;
