import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Nie poprawny email')
    .required('Email jest wymagany')
    .max(100, 'Maksymalnie 100 znaków'),
  password: Yup.string()
    // .matches(
    //   /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,50}$/,
    //   'Hasło nie spełnia wymagań'
    // )
    .required('Hasło jest wymagane')
});

export const registerSchema = Yup.object({
  email: Yup.string()
    .email('Nie poprawny email')
    .max(100, 'Maksymalnie 100 znaków')
    .required('Email jest wymagany'),
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,50}$/,
      'Hasło nie spełnia wymagań'
    )
    .required('Hasło jest wymagane'),
  firstName: Yup.string()
    .min(2, 'Minimum 2 znaki')
    .max(50, 'Maksymalnie 50 znaków')
    .matches(/^[A-Za-z]{2,50}$/, 'Tylko litery')
    .required('Pole wymagane'),
  lastName: Yup.string()
    .min(2, 'Minimum 2 znaki')
    .max(50, 'Maksymalnie 50 znaków')
    .matches(/^[A-Za-z]{2,50}$/, 'Tylko litery')
    .required('Pole wymagane'),
  username: Yup.string()
    .min(2, 'Minimum 2 znaki')
    .max(50, 'Maksymalnie 50 znaków')
    .matches(/^[A-Za-z0-9]{2,50}$/, 'Tylko znaki alfanumeryczne')
    .required('Pole wymagane')
});
