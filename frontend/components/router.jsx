import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import AuthForm from './auth_form';
import Greeting from './greeting';

const AppRouter = () => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Greeting } />
      <Route path="login" component={ AuthForm }/>
      <Route path="signup" component={ AuthForm }/>
    </Route>
  </Router>
);

export default AppRouter;
