import styled, { css } from 'styled-components';

export const StyledForm = styled.form`
  padding: 2rem;
  background: rgb(54, 57, 63);
  color: white;
  font-family: ${({ theme }) => theme.fonts.secondary};
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 500;
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  margin-bottom: 7px;
  color: ${props => (props.error ? 'rgb(240, 71, 71)' : '#bbb')};
  span {
    font-size: 12px;
  }
`;

export const StyledInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.1);
  width: 400px;
  padding: 10px;
  font-size: 18px;
  font-family: inherit;
  ${props =>
    props.error &&
    css`
      border-color: rgb(240, 71, 71);
    `}
  outline: none;
  color: #bbb;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  width: 400px;
  font-size: 20px;
  color: white;
  padding: 10px;
  font-family: inherit;
  /* background-color: ${({ disabled }) =>
    disabled ? '#354170' : '#7289da'}; */
  background-color: #7289da;
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #5b70bd;
  }

  &:disabled {
    background-color: #354170;
  }
`;

export const StyledRedirect = styled.div`
  font-size: 14px;
  margin-top: 5px;

  a {
    text-decoration: none;
    color: #7289da;
    transition: all 0.2s linear;

    &:hover {
      text-decoration: underline;
    }
  }
`;
