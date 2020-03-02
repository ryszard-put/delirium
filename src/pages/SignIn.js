import React from 'react';
import { navigate } from '@reach/router';
import { useAuthRedirect } from '../authentication';
import Form from '../components/Form';
import styled from 'styled-components';

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
      <Form type='signin' />
    </StyledWrapper>
  );
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const { authenticated } = useContext(AuthContext);

  // if (isAuthenticated()) {
  //   navigate('/app/dashboard');
  //   return null;
  // }

  // const handleLogin = async e => {
  //   e.preventDefault();
  //   try {
  //     const res = await DeliriumAPI({
  //       method: 'POST',
  //       url: '/auth/signin/local',
  //       data: { email, password },
  //     });
  //     if (res.status === 200) {
  //       navigate('/app/dashboard');
  //     }
  //   } catch (e) {
  //     console.log(e.response);
  //   }
  // };

  // return (
  //   <div>
  //     <form>
  //       <input
  //         type="email"
  //         name="email"
  //         placeholder="email"
  //         value={email}
  //         onChange={e => setEmail(e.target.value)}
  //       />
  //       <input
  //         type="password"
  //         name="password"
  //         placeholder="password"
  //         value={password}
  //         onChange={e => setPassword(e.target.value)}
  //       />
  //       <button onClick={handleLogin}>Login</button>
  //     </form>
  //     <button
  //       onClick={async e => {
  //         e.preventDefault();
  //         console.log(await isAuthenticated());
  //       }}
  //     >
  //       Check authentication
  //     </button>
  //   </div>
  // );
};

export default SignIn;
