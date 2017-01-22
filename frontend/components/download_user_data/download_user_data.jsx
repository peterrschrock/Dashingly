import React from 'react';

class DownloadUserData extends React.Component {
  constructor(props){
    super(props);


  }

  componentDidMount(){
    if(this.props.userId){
      this.props.getCharts(this.props.userId);
      this.props.getDatasets(this.props.userId);
      this.props.getSharedToMeCharts(this.props.userId);
      this.props.getUsers(this.props.userId);
    }
  }

  componentWillReceiveProps(newProps){
    // debugger
    if(this.props.userId){
      this.props.getCharts(this.props.userId);
      this.props.getDatasets(this.props.userId);
      this.props.getSharedToMeCharts(this.props.userId);
      this.props.getUsers(this.props.userId);
    }
  }

  render(){
    return <div></div>;
  }
}

export default DownloadUserData;
