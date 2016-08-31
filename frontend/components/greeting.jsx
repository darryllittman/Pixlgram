import React from 'react';
import { withRouter } from 'react-router';

const renderAuthForm = (router, url) => (e) => {
    e.preventDefault();
    router.push(url);
};

const Greeting = ({ router }) => (
      <div className="greeting">
        <h1>Pixlgram</h1>
        <br/>
        <button to="/home" className="guest-login">Guest
            Login</button>
        <button className="login"
          onClick={renderAuthForm(router, "/login")}>
          Login</button>
        <button className="signup"
            onClick={renderAuthForm(router, "/signup")}>
            Create an Account</button>
      </div>
    );

export default withRouter(Greeting);
