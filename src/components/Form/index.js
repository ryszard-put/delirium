import React from 'react';
import { Formik, Form, useField } from 'formik';
import { Link } from '@reach/router';

import {
  StyledButton,
  StyledDiv,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledRedirect
} from './styled';
import { createInitialValues, forms } from './helpers';

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
        className='text-input'
        {...field}
        {...props}
      />
    </StyledDiv>
  );
};

export default ({ type }) => {
  const { fields, validationSchema, onSubmit, redirect, button } = forms[type];
  return (
    <>
      <Formik
        initialValues={createInitialValues(fields)}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => {
          return (
            <>
              <StyledForm as={Form} onSubmit={formik.handleSubmit}>
                <h1>Witaj</h1>
                {fields.map(({ value, ...rest }) => (
                  <TextInput key={rest.name} {...rest} />
                ))}
                <StyledButton type='submit' disabled={formik.isSubmitting}>
                  {button}
                </StyledButton>
                <StyledRedirect>
                  {redirect.text} <Link to={redirect.to}>{redirect.link}</Link>
                </StyledRedirect>
              </StyledForm>
            </>
          );
        }}
      </Formik>
    </>
  );
};
