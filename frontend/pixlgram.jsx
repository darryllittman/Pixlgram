import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import {SessionConstants, login} from './actions/session_actions';

const configuredStore = window.store = configureStore();
const Root = () => (
  <div>Hi</div>
);

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById('root');
  ReactDOM.render(<Root />, content);
});
