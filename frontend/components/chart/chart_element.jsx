import React from 'react';
import {bindAll} from 'lodash';
import {LineChart, Line, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class ChartElement extends React.Component {
  constructor(props) {
    super(props);
    bindAll(this, 'dataKey', 'rowKey', 'columnKey', 'completeChart', 'renderChart', 'renderScatterChart', 'renderLineChart');
  }

  dataKey(){
    return this.props.datasets[this.props.chartNewState.dataset_id].data;
  }

  rowKey(){
    return this.props.chartNewState.x_data;
  }

  columnKey(){
    return this.props.chartNewState.y_data;
  }

  completeChart(){
    const thisChart = this.props.chartNewState;
    let outcome = true;
    Object.keys(thisChart).forEach(keyChart => {
      if(thisChart[keyChart] === ""){
        outcome = false;
      }
    });
    return outcome;
  }

  renderScatterChart(){
    return <ScatterChart width={600} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
      <XAxis dataKey={this.rowKey()} name='stature' unit='cm'/>
      <YAxis dataKey={this.columnKey()} name='weight' unit='kg'/>
      <Scatter name='A school' data={this.dataKey()} fill='#8884d8'/>
      <CartesianGrid />
      <Tooltip cursor={{strokeDasharray: '3 3'}}/>
    </ScatterChart>;
  }

  renderLineChart(){
    return <LineChart width={600} height={400} data={this.dataKey()}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
     <XAxis dataKey={this.rowKey()}/>
     <YAxis dataKey={this.columnKey()}/>
     <CartesianGrid strokeDasharray="3 3"/>
     <Tooltip/>
     <Legend />
     <Line type="monotone" dataKey={this.columnKey()} stroke="#8884d8" activeDot={{r: 8}}/>
    </LineChart>;
  }

  renderChart(){
    // debugger
    if(this.completeChart()) {
      switch (this.props.chartNewState.chartType) {
        case "SCATTER":
          return this.renderScatterChart();
        case "LINE":
          return this.renderLineChart();
        default:
          return <h2> Not Enough Data</h2>;
      }
    } else {
        return <h2> Not Enough Data</h2>;
    }
  }

  render(){
    return this.renderChart();
  }
}

export default ChartElement;
