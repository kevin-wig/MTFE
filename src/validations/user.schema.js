import * as Yup from 'yup';

export const userSchema = Yup.object().shape({
  firstname: Yup.string()
    .required('First name is required'),
  lastname: Yup.string()
    .required('Last name is required'),
  email: Yup.string()
    .email('Check the format of the email you entered')
    .required('Email is required'),
  company: Yup.number(),
  userRole: Yup.number(),
});
