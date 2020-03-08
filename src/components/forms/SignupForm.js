import React from 'react';
import { Formik, Form, useField } from 'formik';
import { navigate } from '@reach/router';

import {
  StyledButton,
  StyledDiv,
  StyledForm,
  StyledInput,
  StyledLabel
  // StyledRedirect
} from './styled';
import { registerSchema } from './validation';
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

const SignupForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          password: ''
        }}
        validationSchema={registerSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          setTimeout(async () => {
            try {
              const res = await DeliriumAPI({
                method: 'POST',
                url: '/auth/signup',
                data: { ...values }
              });
              if (res.status === 201) {
                alert('Dodano użytkownika');
                resetForm({
                  firstName: '',
                  lastName: '',
                  username: '',
                  email: '',
                  password: ''
                });
              }
            } catch (e) {
              alert(JSON.stringify(e?.response, null, 2));
              setSubmitting(false);
            }
          }, 2000);
        }}
      >
        {formik => {
          return (
            <>
              <StyledForm
                autoComplete='off'
                as={Form}
                onSubmit={formik.handleSubmit}
              >
                <h1>Dołącz do super duper aplikacji</h1>
                <TextInput
                  label='Imię'
                  name='firstName'
                  type='text'
                  placeholder='Jan'
                />
                <TextInput
                  label='Nazwisko'
                  name='lastName'
                  type='text'
                  placeholder='Kowalski'
                />
                <TextInput
                  label='Nazwa użytkownika'
                  name='username'
                  type='text'
                  placeholder='Pu55yD35stroy3r'
                />
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
                  Zarejestruj konto
                </StyledButton>
                {/* <StyledRedirect>
                  Masz już konto? <Link to={'/signin'}>Zaloguj się</Link>
                </StyledRedirect> */}
              </StyledForm>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default SignupForm;

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
