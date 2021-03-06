import { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';
import DeliriumApi from '../utils/axios';

export const isAuthenticated = async () => {
  try {
    const res = await DeliriumApi.post('/auth/check');
    if (res.data.message === 'authenticated' && res.status === 200) {
      return true;
    }
  } catch (e) {
    if (!e.response) return false;
    if (
      e.response.data.message === 'not-authenticated' &&
      e.response.status === 401
    ) {
      return false;
    }
  }
};

export const useAuthRedirect = () => {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [redirect, setRedirect] = useState({ shouldRedirect: false, to: null });
  useEffect(() => {
    setIsLoading(true);
    setTimeout(async () => {
      const authenticated = await isAuthenticated();
      if (authenticated && pathname === '/') {
        setRedirect({ shouldRedirect: true, to: '/app/dashboard' });
      } else if (!authenticated && pathname.includes('/app')) {
        setRedirect({ shouldRedirect: true, to: '/' });
      }
      setIsLoading(false);
    }, 200);
  }, [pathname]);
  return { isLoading, ...redirect };
};
