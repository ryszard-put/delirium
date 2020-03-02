import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const MainLayout = ({ children }) => {
  return (
    <StyledWrapper>
      <Navbar />
      {children}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  padding: 2em 10em;
`;

export default MainLayout;
