import React from 'react';
import { navigate } from '@reach/router';

import { useAuthRedirect } from '../authentication';
// import { SocketProvider } from '../context/SocketContext';

const SecuredRoutes = props => {
  const { isLoading, shouldRedirect, to } = useAuthRedirect();
  if (isLoading) {
    return <div>Checking Authentication</div>;
  }

  if (shouldRedirect) {
    console.log(shouldRedirect);
    navigate(to);
    return null;
  }
  return <div>{props.children}</div>;
};

export default SecuredRoutes;
