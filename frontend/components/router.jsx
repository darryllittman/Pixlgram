import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import AuthForm from './auth_form';
import AuthFormContainer from "./auth_form_container";
import Greeting from './greeting';

const AppRouter = () => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Greeting } />
      <Route path="login" component={ AuthFormContainer }/>
      <Route path="signup" component={ AuthFormContainer }/>
    </Route>
  </Router>
);

export default AppRouter;
