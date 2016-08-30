import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { SessionConstants, login, logout, signup } from './actions/session_actions';

//
// window.login = login;
// window.logout = logout;
// window.signup = signup;

const configuredStore = window.store = configureStore();
// const Root = () => (
//   <div>
//     hi
//   </div>
// );

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={configuredStore} />, root);
});
