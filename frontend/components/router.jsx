import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import AuthForm from './auth_form';
import AuthFormContainer from "./auth_form_container";
import Greeting from './greeting';
import Photo from "./photo";
import PhotoContainer from './photo_container';
import UploadFormContainer from './upload_form_container';
import PhotoFeedContainer from './photo_feed_container';

const AppRouter = () => (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Greeting } />
      <Route path="login" component={ AuthFormContainer } />
      <Route path="signup" component={ AuthFormContainer } />
      // <Route path="photos" component={ PhotoFeedContainer }></Route>
      <Route path="photos/add" component={ UploadFormContainer }></Route>
      <Route path="photos/:id" component={ PhotoContainer }></Route>


    </Route>
  </Router>
);

export default AppRouter;
