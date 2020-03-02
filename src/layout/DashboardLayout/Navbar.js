import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import DeliriumAPI from '../../utils/axios';

const Navbar = () => {
  const { dispatch } = useContext(AuthContext);

  const handleSignOut = async e => {
    e.preventDefault();
    try {
      const response = await DeliriumAPI({
        method: 'POST',
        url: '/auth/signout'
      });
      const { status } = response.data;
      if (status === 'success') {
        dispatch({ type: 'sign-out' });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav>
      <div>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </nav>
  );
};

export default Navbar;
