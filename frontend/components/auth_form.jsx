import React from 'react';
import { withRouter } from 'react-router';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: "", fullName: ""};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(key) {
    return (e) => {
      this.setState({[key]: e.currentTarget.value});
    };
  }

  handleSubmit (title) {
    const that = this;
    return (e) => {
      e.preventDefault();
      return (title === "Login") ? that.props.login(that.state) :
        that.props.signup(that.state);
    };


  }

  render() {
    let form;
    let formClass;
    let fullName;
    let title;
    if (this.props.router.isActive('/signup')) {
      formClass = "signup-form";
      fullName =     (<label>Full Name:
                            <input className="full-name-input"
                                   type="text" />
                      </label>);
      title = "Sign up to see photos of your friends";
    } else if (this.props.router.isActive('/login')) {
      formClass = "login-form";
      title = "Log in to see photos of your friends";
    }

    return(

      <div className={formClass}>
        <section className="entry-photo">Photo Here</section>


        <section className="auth-form">
          <h1 className="logo">Pixlgram</h1>
          <h3 className="auth-form-title">{title}</h3>


          <form className="auth-form"
                onSubmit={this.handleSubmit(title)}>

            <label>Username:
              <input className="username-input"
                     type="text"
                     value={this.state.username}
                     onChange={this.update("username")} />
            </label>
            <br/>
            {fullName}
            <br/>
            <label>Password:
              <input className="password-input"
                     type="password"
                     value={this.state.password}
                     onChange={this.update("password")} />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </form>
        </section>
      </div>

    );
  }
}


export default withRouter(AuthForm);
