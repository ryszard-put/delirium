import React from 'react';
import { Formik, Form, useField } from 'formik';
import { navigate } from '@reach/router';

import {
  StyledButton,
  StyledDiv,
  StyledForm,
  StyledInput,
  StyledLabel
} from './styled';
import { loginSchema } from './validation';
import DeliriumAPI from '../../utils/axios';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <StyledDiv>
      <StyledLabel
        error={meta.touched && meta.error}
        htmlFor={props.id || props.name}
      >
        {label.toUpperCase()}
        {meta.touched && meta.error ? <span> - {meta.error}</span> : ''}
      </StyledLabel>
      <StyledInput
        error={meta.touched && meta.error}
        // className='text-input'
        {...field}
        {...props}
      />
    </StyledDiv>
  );
};

const SigninForm = () => {
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={({ email, password }, { setSubmitting }) => {
          setSubmitting(true);
          setTimeout(async () => {
            try {
              const res = await DeliriumAPI({
                method: 'POST',
                url: '/auth/signin/local',
                data: { email, password }
              });
              if (res.status === 200) {
                navigate('/app/dashboard');
              }
            } catch (e) {
              console.log(e.response?.data?.error);
              setSubmitting(false);
            }
          }, 2000);
        }}
      >
        {formik => {
          return (
            <>
              <StyledForm as={Form} onSubmit={formik.handleSubmit}>
                <h1>Masz już konto?</h1>
                <TextInput
                  label='E-mail'
                  name='email'
                  type='email'
                  placeholder='me@me.com'
                />
                <TextInput
                  label='Hasło'
                  name='password'
                  type='password'
                  placeholder=''
                />
                <StyledButton type='submit' disabled={formik.isSubmitting}>
                  Zaloguj się
                </StyledButton>
                {/* <StyledRedirect>
                  Nie masz konta? <Link to={'/signup'}>Zarejestruj się</Link>
                </StyledRedirect> */}
              </StyledForm>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default SigninForm;

// onSubmit: ({ email, password }, { setSubmitting }) => {
//   setSubmitting(true);
//   setTimeout(async () => {
//     try {
//       const res = await DeliriumAPI({
//         method: 'POST',
//         url: '/auth/signup',
//         data: { email, password }
//       });
//       if (res.status === 201) {
//         alert('Dodano użytkownika');
//       }
//     } catch (e) {
//       console.log(e.response);
//       setSubmitting(false);
//     }
//   }, 2000);
// };
