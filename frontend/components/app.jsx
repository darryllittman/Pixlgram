import React from 'react';
import Greeting from './greeting';

const App = ({children}) => (
  <div>
    <h1>Logo goes here</h1>
    <Greeting />
    {children}
  </div>
);

export default App;
