import React from 'react';

class DownloadUserData extends React.Component {
  constructor(props){
    super(props);


  }

  componentDidMount(){
    this.props.getCharts(this.props.userId);
    this.props.getDatasets(this.props.userId);
  }

  componentWillReceiveProps(){    
    this.props.getCharts(this.props.userId);
    this.props.getDatasets(this.props.userId);
  }

  render(){
    return <div></div>;
  }
}

export default DownloadUserData;
