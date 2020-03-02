import { navigate } from '@reach/router';
import DeliriumAPI from '../../utils/axios';
import { loginSchema } from './validation';

export const forms = {
  signin: {
    fields: [
      {
        name: 'email',
        value: '',
        type: 'email',
        label: 'E-mail',
        placeholder: 'jon@doe.com',
      },
      {
        name: 'password',
        value: '',
        type: 'password',
        label: 'Hasło',
        placeholder: 'Twoje hasło',
      },
    ],
    button: 'Zaloguj się',
    redirect: {
      text: 'Nie masz konta?',
      to: '/app/signup',
      link: 'Zarejestruj się',
    },
    validationSchema: loginSchema,
    onSubmit: ({ email, password }, { setSubmitting }) => {
      setSubmitting(true);
      setTimeout(async () => {
        try {
          const res = await DeliriumAPI({
            method: 'POST',
            url: '/auth/signin/local',
            data: { email, password },
          });
          if (res.status === 200) {
            navigate('/app/dashboard');
          }
        } catch (e) {
          console.log(e.response);
          setSubmitting(false);
        }
      }, 2000);
    },
  },
};

export const createInitialValues = fields => ({
  ...fields.reduce((prev, curr) => ({ ...prev, [curr.name]: curr.value }), {}),
});
