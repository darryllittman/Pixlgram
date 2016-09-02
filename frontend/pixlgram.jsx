import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { SessionConstants, login, logout, signup, receiveCurrentUser }
  from './actions/session_actions';
import * as ApiUtil from './util/session_api_util';

//
window.login = login;
window.logout = logout;
window.signup = signup;
window.ApiUtil = ApiUtil;
window.receiveCurrentUser = receiveCurrentUser;


document.addEventListener("DOMContentLoaded", () => {
  const preloadedState = {session: {currentUser: window.currentUser}};
  const configuredStore = window.store = configureStore(preloadedState);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={configuredStore} />, root);
});

window.test = () => {
  const success = (data) => configuredStore.dispatch(receiveCurrentUser(data));
  const user = {username: "user 4", password: "password"};
  const errorCallback = (e) => console.log(e);

  configuredStore.dispatch(login(user, success, errorCallback));
};
