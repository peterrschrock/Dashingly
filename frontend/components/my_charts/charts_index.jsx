import React from 'react';
import {bindAll} from 'lodash';

import ChartElementContainer from './charts_index_element_container';

class ChartsIndex extends React.Component {
  constructor(props){
    super(props);

    bindAll(this, 'chartsContainer', 'handleScroll');
    this.state = {whichChart: 0, charts: null};
  }


  componentDidMount(){
    if(this.props.charts.length === 0 && Object.keys(this.props.datasets).length === 0){
      this.props.getCharts(this.props.userId);
      this.props.getDatasets(this.props.userId);
    }
  }

  componentWillReceiveProps(newProps){
    this.setState({charts: newProps.charts.slice(1)});
    // TODO why this undefined thing at begining of array?
  }

  handleScroll(scroll){
    debugger
  }



  chartsContainer(){
    if(this.props.charts.length > 0){
      return <ChartElementContainer passState={this.state}/>;
    } else {
      return <h3>You haven't made any charts yet!</h3>;
    }
  }

  render(){
    return <div onScroll={() => this.handleScroll()}>
      {this.chartsContainer()}
    </div>;

  }

}


export default ChartsIndex;
