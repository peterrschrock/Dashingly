import React from 'react';
// const HomepageBackground = require('../../../app/assets/images/background/homepage.jpg');
// <img src={HomepageBackground} />
// TODO add error handling
// TODO guest accounts
// <img src={require('./assets/images/background/homepage.jpg')}/>


class CreateSessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleSignup(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  handleLogin(e){
    e.preventDefault();
    this.props.login(this.state);
  }

  refresh(field){(
    e => this.setState({
      [field]: e.currentTarget.value
    })
  );}

  render() {
    return <div>
      <h2>Create Account or Sign In</h2>
      <form>
        <h4>Username:</h4>
        <input type="text" value={this.state.username} onChange={this.refresh("username")}></input><br/>
        <h4>Password:</h4>
        <input type="password" value={this.state.password} onChange={this.refresh("password")}></input><br/><br/>
        <button onSubmit={this.handleSignup}>Create Account</button>
        <button onSubmit={this.handleLogin}>Log In</button><br/>
      </form>
    </div>;
  }
}


export default CreateSessionForm;
