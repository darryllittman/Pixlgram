import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import LoginForm from './login_form';
import Greeting from './greeting';

const AppRouter = () => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Greeting } />
      <Route path="login" component={ LoginForm }/>
      <Route path="signup" component={ LoginForm }/>
    </Route>
  </Router>
);

export default AppRouter;
