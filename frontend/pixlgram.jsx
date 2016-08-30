import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

const configuredStore = window.store = configureStore();
const Root = () => (
  <div>Hi</div>
);

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById('root');
  ReactDOM.render(<Root />, content);
});
