import React from 'react';
import { withRouter } from 'react-router';


const SignupForm = () => (
  <div>In Sign Up Form</div>
);

const LoginForm = () => (
  <div>In Login Form</div>
);

const AuthForm = ({ router }) => {
  console.log(router.isActive('/login'));
  console.log(router.isActive('/signup'));


  let form;
  if (router.isActive('/signup')) {
    form = SignupForm();
  } else if (router.isActive('/login')) {
    form = LoginForm();
  }
  console.log(form);

  return(
    <div>{form}</div>
  );
};

// export default AuthForm;
export default withRouter(AuthForm);
