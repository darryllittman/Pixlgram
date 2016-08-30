import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from './store';

// const configuredStore = configureStore();
const Root = () => (
  <div>Hi there.</div>
);

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById('root');
  ReactDOM.render(<Root />, content);
});
