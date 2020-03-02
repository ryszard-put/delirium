import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Nie poprawny email')
    .required('Email jest wymagany'),
  password: Yup.string()
    .min(4, 'Hasło musi mieć minimum 4 znaki')
    .required('Hasło jest wymagane'),
});
