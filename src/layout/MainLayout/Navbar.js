import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import styled from 'styled-components';

const Navbar = props => {
  const { state } = useContext(AuthContext);
  return (
    <StyledNav>
      <img
        src='https://cdn.iconscout.com/icon/free/png-256/discord-3-569463.png'
        alt='discord-app'
      />
      <StyledLinks>
        {state.isLoggedIn ? (
          <div>
            <Link to='/authorized'>Go to authorized route</Link>
          </div>
        ) : (
          <>
            <div>
              <Link to='/'>Home</Link>
            </div>
            <div>
              <Link to='/login'>LoginPage</Link>
            </div>
          </>
        )}
      </StyledLinks>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;

  img {
    width: 80px;
  }
`;

const StyledLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    margin: 0 20px;
    a {
      text-decoration: none;
      padding: 12px 24px;
      /* background-color: ${({ theme }) => theme.colors.primary}; */
      color: black;
      font-size: 24px;
    }
  }
`;

export default Navbar;
