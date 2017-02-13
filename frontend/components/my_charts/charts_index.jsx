import React from 'react';
import {bindAll} from 'lodash';

import ChartElementContainer from './charts_index_element_container';
import SharedChartElementContainer from '../charts_to_me/to_me_chart_index_container';
import ChartOptionsContainer from './chart_options_container';
import NavBarContainer from '../nav_bar/nav_bar_container';

import Right from 'react-icons/lib/fa/arrow-circle-right';
import Left from 'react-icons/lib/fa/arrow-circle-left';

class ChartsIndex extends React.Component {
  constructor(props){
    super(props);

    bindAll(this, 'chartsContainer', 'handleLeft', 'handleRight', 'includeChartOptions');
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
      this.props.getUsers(this.props.userId);
    }
  }

  componentWillReceiveProps(newProps){
    this.setState({whichChart: 0, charts: newProps.charts});
  }


  chartsContainer(){
    if(this.props.charts.length > 0){
      if(this.props.shared){
        return <SharedChartElementContainer passState={this.state}/>;
      }else{
        return <ChartElementContainer passState={this.state}/>;
      }
    } else {
      if(this.props.shared){
        return (<h3>No one has shared a chart with you yet!</h3>);
      } else{
        return (<h3>You have not made any charts yet!</h3>);
      }
    }
  }

  handleLeft(){
    let newWhichChartLeft = (this.state.whichChart - 1) % this.state.charts.length;
    newWhichChartLeft = (newWhichChartLeft + this.state.charts.length) % this.state.charts.length;
    this.setState({whichChart: newWhichChartLeft});
  }

  handleRight(){
    let newWhichChartRight = (this.state.whichChart + 1) % this.state.charts.length;
    this.setState({whichChart: newWhichChartRight});
  }

  includeChartOptions(){
    if(this.props.shared){
      if(this.props.charts.length > 0 && Object.keys(this.props.otherUsers).length > 0) {
        const ownerId = this.props.charts[this.state.whichChart].user_id;
        return <h4>Shared by {this.props.otherUsers.users[ownerId].username}</h4>;
      } else {
        return <div></div>;
      }
    } else {
      return <ChartOptionsContainer passState={this.state}/>;
    }
  }

  renderRightArrow(){
    if(this.props.charts.length > 1){
      return <Right className="change-current-chart-arrows" onClick={() => this.handleRight()}/>
    } else{
      return <div></div>;
    }
  }

  renderLeftArrow(){
    if(this.props.charts.length > 1){
      return <Left className="change-current-chart-arrows" onClick={() => this.handleLeft()}/>
    } else{
      return <div></div>;
    }
  }


  render(){
    return <div className="charts-index-page">
      <NavBarContainer/>
      <div className="chart-with-arrows">
        {this.renderLeftArrow()}
        {this.chartsContainer()}
        {this.renderRightArrow()}
      </div>
      {this.includeChartOptions()}
    </div>;

  }

}


export default ChartsIndex;
