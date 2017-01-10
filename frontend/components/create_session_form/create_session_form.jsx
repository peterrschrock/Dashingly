import React from 'react';
// const HomepageBackground = require('../../../app/assets/images/background/homepage.jpg');
// <img src={HomepageBackground} />
// TODO add error handling
// TODO guest accounts


class CreateSessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleSignup = this.handleSignup.bing(this);
    this.handleLogin = this.handleLogin.bing(this);
  }

  handleSignup(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  handleLogin(e){
    e.preventDefault();
    this.props.login(this.state);
  }

  render() {
    return <div>
      <h2>Create Account or Sign In</h2>
      <form>
        <h4>Username:</h4><br/>
        <input type="text" name="user[username]"></input><br/>
        <h4>Password:</h4><br/>
        <input type="password" name="user[password]"></input><br/>
        <button onSubmit={this.handleSignup}>Create Account</button>
        <button onSubmit={this.handleLogin}>Log In</button><br/>
      </form>
    </div>;
  }
}


export default CreateSessionForm;
