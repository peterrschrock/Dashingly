import React from 'react';
import {Link} from 'react-router';
// const HomepageBackground = require('../../../app/assets/images/background/homepage.jpg');
// <img src={HomepageBackground} />
// TODO add error handling
// TODO guest accounts
// <img src={require('./assets/images/background/homepage.jpg')}/>


class CreateSessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.cleanState();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.whichAction(this.state)
      .then(this.cleanState());
  }

  cleanState(){
    this.state = {username: "", password: ""};
  }

  // handleLoggedIn(){
  //   if(this.props.username) {
  //     this.props.
  //   }
  // }

  refresh(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  header(){
    if(this.props.whichForm === 'signup') {
      return "Create Account";
    } else {
      return "Log In";
    }
  }

  whichLink(){
    if(this.props.whichForm === 'signup') {
      return <Link to="/login"> Or Log In</Link>;
    } else {
      return <Link to="/signup"> Or Sign Up</Link>;
    }
  }

  render() {
    return <div>
      <h1>dashingly</h1><br/>
      <h2>{this.header()}</h2>
      <h4>{this.whichLink()}</h4>
      <form onSubmit={this.handleSubmit}>
        <h4>Username:</h4>
        <input type="text" value={this.state.username} onChange={this.refresh("username")}></input><br/>
        <h4>Password:</h4>
        <input type="password" value={this.state.password} onChange={this.refresh("password")}></input><br/><br/>
        <input type="submit" value={this.header()}></input>
      </form>
    </div>;
  }
}


export default CreateSessionForm;
