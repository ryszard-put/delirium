import { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';
import { isAuthenticated } from '../../authentication/helpers';

const useAuthRedirect = () => {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRedirect, setRedirect] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(async () => {
      if (!(await isAuthenticated()) && pathname !== '/app/signin') {
        setRedirect(true);
      } else {
        setRedirect(false);
      }
      setIsLoading(false);
    }, 2000);
  }, [pathname]);

  return [isLoading, shouldRedirect];
};

export default useAuthRedirect;
