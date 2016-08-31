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
                            <input type="text"></input>
                      </label>);
      title = "Signup";
    } else if (this.props.router.isActive('/login')) {
      formClass = "login-form";
      title = "Login";
    }

    return(

      <div className={formClass}>
        <h1 className="logo">Pixlgram</h1>
        <h3>{title}</h3>

        <form onSubmit={this.handleSubmit(title)}>
          <label>Username:
            <input type="text" value={this.state.username}
              onChange={this.update("username")} />
          </label>
          {fullName}
          <label>Password:
            <input type="password" value={this.state.password}
              onChange={this.update("password")} />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>

    );
  }
}


export default withRouter(AuthForm);
