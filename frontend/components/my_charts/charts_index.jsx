import React from 'react';
import {bindAll} from 'lodash';

import ChartElementContainer from './charts_index_element_container';
import ChartOptionsContainer from './chart_options_container';
import NavBarContainer from '../nav_bar/nav_bar_container';

class ChartsIndex extends React.Component {
  constructor(props){
    super(props);

    bindAll(this, 'chartsContainer');
    this.state = {whichChart: 0, charts: this.props.charts};
    window.addEventListener('mousewheel', e => {
      if(e.wheelDelta > 0) {
        let newWhichChart = (this.state.whichChart - 1) % this.state.charts.length;
        newWhichChart = (newWhichChart + this.state.charts.length) % this.state.charts.length;
        this.setState({whichChart: newWhichChart});
      } else{
        let newWhichChartDown = (this.state.whichChart + 1) % this.state.charts.length;
        this.setState({whichChart: newWhichChartDown});
      }
    });
  }


  componentDidMount(){
    if(this.props.charts.length === 0 && Object.keys(this.props.datasets).length === 0){
      this.props.getCharts(this.props.userId);
      this.props.getDatasets(this.props.userId);
    }
  }

  componentWillReceiveProps(newProps){
    this.setState({charts: newProps.charts});
    // TODO why this undefined thing at begining of array?
  }


  chartsContainer(){
    if(this.props.charts.length > 0){
      return <ChartElementContainer passState={this.state}/>;
    } else {
      return <h3>You haven't made any charts yet!</h3>;
    }
  }

  render(){
    return <div>
      <NavBarContainer/>
      {this.chartsContainer()}
      <ChartOptionsContainer passState={this.state}/>
    </div>;

  }

}


export default ChartsIndex;