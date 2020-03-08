import React from 'react';
import { navigate } from '@reach/router';
import { useAuthRedirect } from '../authentication';
import styled from 'styled-components';
import DeliriumAPI from '../utils/axios';
import SigninForm from '../components/forms/SigninForm';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: rgb(54, 57, 63);
`;

const StyledDiv = styled.div`
  background-color: white;
  width: 50%;
  height: 100vh;
`;

const Hero = () => {
  return (
    <StyledDiv>
      <h2>Content</h2>
      <button
        onClick={async e => {
          e.preventDefault();
          try {
            const res = await DeliriumAPI.post('/auth/signout');
            if (res.status === 200) {
              console.log(res);
              navigate('/signin');
            }
          } catch (e) {
            console.log(e);
          }
        }}
      >
        Sign Out
      </button>
    </StyledDiv>
  );
};

const SignIn = () => {
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
      <Hero />
      <SigninForm />
    </StyledWrapper>
  );
};

export default SignIn;
