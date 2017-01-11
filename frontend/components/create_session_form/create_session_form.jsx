import React from 'react';
import {Link, hashHistory} from 'react-router';
// const HomepageBackground = require('../../../app/assets/images/background/homepage.jpg');
// <img src={HomepageBackground} />
// TODO add error handling
// TODO guest accounts
// <img src={require('./assets/images/background/homepage.jpg')}/>


class CreateSessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.username) {
			hashHistory.push("/");
		}
	}

  handleSubmit(e){
    e.preventDefault();
    this.props.whichAction(this.state);
  }

  handleGuest(e){
    e.preventDefault();
    this.state.username ="guest";
    this.props.guestLogin();
  }

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
      return <Link to="/login" className="toggle-user-type"> Or Log In</Link>;
    } else {
      return <Link to="/signup" className="toggle-user-type"> Or Sign Up</Link>;
    }
  }


  render() {
    return <div className="full-screen">
      <section>
        <h1 className="company-title">dashingly</h1>
        <h3 className="maverick">business analytics for mavericks</h3>
        <section className="auth-box">
          <h2>{this.header()}</h2>
          <form onSubmit={this.handleSubmit} className="auth-form">
            <input className="auth-field" placeholder="Username..." type="text" value={this.state.username} onChange={this.refresh("username")}></input>
            <input className="auth-field" placeholder="Password..." type="password" value={this.state.password} onChange={this.refresh("password")}></input>
            <input className="auth-submit" type="submit" value={this.header()}></input>
          </form>
          <form onSubmit={this.handleGuest} className="guest-acc">
            <input type="submit" className="guest-acc-submit" value="Use As Guest"></input>
          </form>
          {this.whichLink()}
        </section>
      </section>
    </div>;
  }
}


export default CreateSessionForm;
