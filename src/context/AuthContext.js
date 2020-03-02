import React, { createContext, useReducer, useEffect } from 'react';

export const AuthContext = createContext(null);

const initialAuthState = {
  isLoggedIn: false,
  user: null
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'sign-in':
      return {
        ...state,
        isLoggedIn: true,
        user: {
          email: action.email
        }
      };
    case 'sign-out':
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    AuthReducer,
    JSON.parse(localStorage.getItem('auth-context')) || initialAuthState
  );

  useEffect(() => {
    console.log(state);
    localStorage.setItem('auth-context', JSON.stringify(state));
  }, [state]);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
