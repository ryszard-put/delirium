import React from 'react';
import { navigate } from '@reach/router';
import { useAuthRedirect } from '../authentication';
import SignupForm from '../components/forms/SignupForm';
import styled from 'styled-components';
import SigninForm from '../components/forms/SigninForm';
// import DeliriumAPI from '../utils/axios';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: rgb(54, 57, 63);
`;

const Home = () => {
  const { isLoading, shouldRedirect, to } = useAuthRedirect();

  if (isLoading) {
    return (
      <iframe
        title='Gówno'
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
          display: 'block'
        }}
        src='https://projects.thesoban.pl/css/rainbow-spinner'
      ></iframe>
    );
  }
  if (shouldRedirect) {
    navigate(to);
    return null;
  }

  return (
    <StyledWrapper>
      <SigninForm />
      <SignupForm />
    </StyledWrapper>
  );
};

export default Home;
