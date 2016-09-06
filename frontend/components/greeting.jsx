import React from 'react';
import { withRouter } from 'react-router';

const renderAuthForm = (router, url) => (e) => {
    e.preventDefault();
    router.push(url);
};

// const guestLogin = (router, url) => (e) => {
//     e.preventDefault();
//     router.push(url);
// };

const Greeting = ({ router }) => (
      <div className="greeting">
        <section className="entry-photo">Photo Here</section>

        <section className="entry-buttons">
          <header className="logo"><h1>Pixlgram</h1></header>

          <button className="guest-login-button">
                  Guest Login
          </button>

          <div className="auth-buttons">
            <button className="login-button"
                    onClick={renderAuthForm(router, "/login")}>
                    Login
            </button>
            <button className="signup-button"
                    onClick={renderAuthForm(router, "/signup")}>
                    Create an Account
            </button>
          </div>
        </section>

      </div>
    );

export default withRouter(Greeting);
