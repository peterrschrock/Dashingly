import React from 'react';
import {hashHistory} from 'react-router';
import {bindAll} from 'lodash';
import Back from 'react-icons/lib/ti/arrow-back';

import NavBarContainer from '../nav_bar/nav_bar_container';

class ShareForm extends React.Component {
  constructor(props) {
    super(props);
    bindAll(this, 'handleBack', 'renderBackButton', 'renderShares', 'renderTitle', 'handleChange', 'isShared');
    this.state = {};
  }

  componentDidMount(){
    if(this.props.charts.length === 0 && Object.keys(this.props.otherUsers).length === 0){
      this.props.getCharts(this.props.userId);
      this.props.getUsers(this.props.userId);
      this.props.getUsersSharedTo(this.props.formType);
    } else {
      this.props.getUsersSharedTo(this.props.formType);
    }
  }

  handleChange(e, userId){
    const shared = this.isShared(userId);
    if(shared){
      this.props.deleteShare(e.target.id.slice(5), this.props.formType);
    } else {
      this.props.createShare(e.target.id.slice(5), this.props.formType);
    }
  }

  isShared(userId){
    if(Object.keys(this.props.chartSharedTo).length > 0) {
      if(this.props.chartSharedTo.users[userId]){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  renderShares(){
    if(Object.keys(this.props.otherUsers).length > 0) {
      return Object.keys(this.props.otherUsers.users).map((userId) => {
        const userObj = this.props.otherUsers.users[userId];
        return <div className={`checkbox-holder`} key={`check${userId}holder`}>
          <label key={`check${userId}label`} htmlFor={`check${userId}`}>{userObj.username}</label>
          <input checked={this.isShared(userId)} onChange={(e) => this.handleChange(e, userId)} type="checkbox" key={`check${userId}`} id={`check${userId}`}></input>
        </div>;
        }
      );
    }
    else{
      return <div></div>;
    }
  }

  renderTitle(){
    if(this.props.charts.length > 0){
      const chartObj = $.grep(this.props.charts, e => {return e.id === parseInt(this.props.formType);})[0];
      return <h2 className="share-info">{chartObj.title}</h2>;
    } else {
      return <div></div>;
    }
  }

  handleBack(){
    hashHistory.push("/charts");
  }

  renderBackButton(){
    return <button className="back-button" onClick={this.handleBack}><Back className="nav-icon back-icon"/>Back To Chart Homepage</button>
  }

  render() {
    return (<div id="shared-page">
      <NavBarContainer/>
      <div id="shared-container" className="shared-container">
        {this.renderTitle()}
        <h3 className="share-info">Shared With:</h3>
        <div id="other-users-container">
          {this.renderShares()}
        </div>
        {this.renderBackButton()}
      </div>
    </div>);
  }
}

export default ShareForm;
