import React from 'react';
import {bindAll} from 'lodash';
import {PieChart, Pie, AreaChart, Area, BarChart, Bar, LineChart, Line, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class ChartElement extends React.Component {
  constructor(props) {
    super(props);
    bindAll(this, 'dataKey', 'rowKey', 'columnKey', 'completeChart', 'renderChart', 'renderScatterChart', 'renderLineChart', 'renderBarChart', 'renderAreaChart', 'renderPieChart');

    // debugger
  }

  dataKey(){
    if(this.props.datasets[this.props.chartState.dataset_id]) {
      return this.props.datasets[this.props.chartState.dataset_id].data;
    }
  }

  rowKey(){
    return this.props.chartState.x_data;
  }

  columnKey(){
    return this.props.chartState.y_data;
  }

  completeChart(){
    const thisChart = this.props.chartState;
    let outcome = true;
    Object.keys(thisChart).forEach(keyChart => {
      if(thisChart[keyChart] === ""){
        outcome = false;
      }
    });
    return outcome;
  }

  renderScatterChart(){
    return <ScatterChart className="chart-show" width={600} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
      <XAxis dataKey={this.rowKey()} name='stature' unit='cm'/>
      <YAxis dataKey={this.columnKey()} name='weight' unit='kg'/>
      <Scatter name='A school' data={this.dataKey()} fill='#8884d8'/>
      <CartesianGrid />
      <Tooltip cursor={{strokeDasharray: '3 3'}}/>
    </ScatterChart>;
  }

  renderLineChart(){
    return <LineChart className="chart-show" width={600} height={400} data={this.dataKey()}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
     <XAxis dataKey={this.rowKey()}/>
     <YAxis/>
     <CartesianGrid strokeDasharray="3 3"/>
     <Tooltip/>
     <Legend />
     <Line type="monotone" dataKey={this.columnKey()} stroke="#8884d8" activeDot={{r: 8}}/>
    </LineChart>;
  }

  renderBarChart(){
    // debugger
    return <BarChart className="chart-show" width={600} height={400} data={this.dataKey()}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
     <XAxis dataKey={this.rowKey()}/>
     <YAxis/>
     <CartesianGrid strokeDasharray="3 3"/>
     <Tooltip/>
     <Legend />
     <Bar dataKey={this.columnKey()} fill="#8884d8" />
    </BarChart>;
  }

  renderAreaChart(){
    return <AreaChart className="chart-show" width={600} height={400} data={this.dataKey()}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
      <XAxis dataKey={this.rowKey()}/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Area type='monotone' dataKey={this.columnKey()} stroke='#8884d8' fill='#8884d8' />
    </AreaChart>;
  }

  renderPieChart(){
    return <PieChart className="chart-show" width={600} height={400}>
      <Pie data={this.dataKey()} nameKey={this.rowKey()} valueKey={this.columnKey()} fill="#8884d8" label/>
      <Tooltip/>
     </PieChart>;
  }

  renderChart(){
    // debugger
    if(this.completeChart() && this.dataKey()) {
      switch (this.props.chartState.chartType) {
        case "SCATTER":
          return this.renderScatterChart();
        case "LINE":
          return this.renderLineChart();
        case "BAR":
          return this.renderBarChart();
        case "AREA":
          return this.renderAreaChart();
        case "PIE":
          return this.renderPieChart();
        default:
          return <h2> Not Enough Data</h2>;
      }
    } else {
        return <h2> Not Enough Data</h2>;
    }
  }

  render(){
    return <div className="chart-element-holder">{this.renderChart()}</div>;
  }
}

export default ChartElement;
