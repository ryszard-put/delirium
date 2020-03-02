import React from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';

import { isAuthenticated } from '../authentication';
import DeliriumAPI from '../utils/axios';

import AppLayout from '../layout/AppLayout';

const StyledH1 = styled.h1`
  margin: 20px 0 0 20px;
  font-family: ${props =>
    props.primary ? props.theme.fonts.primary : props.theme.fonts.secondary};
`;

const StyledParagraph = styled.p`
  margin: 20px 0 0 20px;
  font-family: ${props =>
    props.primary ? props.theme.fonts.primary : props.theme.fonts.secondary};
`;

const Dashboard = () => {
  React.useEffect(() => console.log('/app/dashboard rendered'));
  return (
    <AppLayout>
      <StyledH1 primary>Welcome to dashboard, sucker</StyledH1>
      <StyledParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in enim
        <br />
        luctus, fermentum neque et, euismod tellus. Integer imperdiet viverra
        <br />
        rhoncus. Proin vulputate orci vel dignissim luctus. Etiam condimentum
        <br />
        odio a nisi volutpat, at sodales arcu facilisis. Integer porttitor orci
        <br />
        tempus, commodo sem ac, ullamcorper dui. Maecenas eleifend efficitur
        <br />
        tortor sit amet viverra. Nam id nibh sit amet leo ullamcorper facilisis.
        <br />
        Duis vestibulum volutpat suscipit. Etiam sit amet fringilla tortor. Cras
        <br />
        erat mauris, cursus a libero nec, vehicula porta augue. Nullam
        <br />
        consectetur justo lacus, id consequat ante semper nec. Vivamus auctor
        <br />
        enim ac quam posuere, at malesuada ex tincidunt. Aliquam erat volutpat.
        <br />
      </StyledParagraph>
      <StyledH1>Welcome to dashboard, sucker</StyledH1>
      <StyledParagraph primary>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in enim
        <br />
        luctus, fermentum neque et, euismod tellus. Integer imperdiet viverra
        <br />
        rhoncus. Proin vulputate orci vel dignissim luctus. Etiam condimentum
        <br />
        odio a nisi volutpat, at sodales arcu facilisis. Integer porttitor orci
        <br />
        tempus, commodo sem ac, ullamcorper dui. Maecenas eleifend efficitur
        <br />
        tortor sit amet viverra. Nam id nibh sit amet leo ullamcorper facilisis.
        <br />
        Duis vestibulum volutpat suscipit. Etiam sit amet fringilla tortor. Cras
        <br />
        erat mauris, cursus a libero nec, vehicula porta augue. Nullam
        <br />
        consectetur justo lacus, id consequat ante semper nec. Vivamus auctor
        <br />
        enim ac quam posuere, at malesuada ex tincidunt. Aliquam erat volutpat.
        <br />
      </StyledParagraph>
      <button
        onClick={async e => {
          e.preventDefault();
          console.log(await isAuthenticated());
        }}
      >
        Check authentication
      </button>
      <button
        onClick={async e => {
          e.preventDefault();
          try {
            const res = await DeliriumAPI.post('/auth/signout');
            if (res.status === 200) {
              navigate('/signin');
            }
          } catch (e) {
            console.log(e);
          }
        }}
      >
        Sign Out
      </button>
    </AppLayout>
  );
};

export default Dashboard;
