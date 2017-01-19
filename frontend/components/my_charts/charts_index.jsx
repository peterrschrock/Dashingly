import React from 'react';
import {bindAll} from 'lodash';

import ChartElementContainer from './charts_index_element_container';

class ChartsIndex extends React.Component {
  constructor(props){
    super(props);

    bindAll(this, 'chartKeys');
    this.state = {currentChart: this.chartKeys(this.props.charts)[0]};
  }

  componentWillReceiveProps(newProps){
    debugger
    this.setState({currentChart: this.chartKeys(newProps.charts)[0]});
  }

  chartKeys(charts){
    debugger
    return Object.keys(charts);
  }

  render(){
    return <ChartElementContainer whichChart={this.state}/>;
  }

}


export default ChartsIndex;
