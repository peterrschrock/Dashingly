import React from 'react';
import {bindAll} from 'lodash';
import {Cell, ResponsiveContainer, PieChart, Pie, AreaChart, Area, BarChart, Bar, LineChart, Line, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class ChartElement extends React.Component {
  constructor(props) {
    super(props);
    bindAll(this, 'quantatativeCheck', 'isNumber', 'dataKey', 'rowKey', 'columnKey', 'completeChart', 'renderChart', 'renderScatterChart', 'renderLineChart', 'renderBarChart', 'renderAreaChart', 'renderPieChart');

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
    return (<ResponsiveContainer width="80%" height="100%">
      <ScatterChart className="chart-show">
        <XAxis fill='#000000' stroke='#000000' label={this.props.chartState.x_name} dataKey={this.rowKey()}/>
        <YAxis fill='#000000' stroke='#000000' label={this.props.chartState.y_name} dataKey={this.columnKey()}/>
        <Scatter name='A school' data={this.dataKey()} fill='#000000'/>
        <CartesianGrid />
        <Tooltip cursor={{strokeDasharray: '3 3'}}/>
      </ScatterChart>
    </ResponsiveContainer>);
  }

  renderLineChart(){
    return (<ResponsiveContainer width="80%" height="100%">
      <LineChart className="chart-show" data={this.dataKey()}>
       <XAxis fill='#000000' stroke='#000000' label={this.props.chartState.x_name} dataKey={this.rowKey()}/>
       <YAxis fill='#000000' stroke='#000000' label={this.props.chartState.y_name}/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey={this.columnKey()} fill="#000000" activeDot={{r: 8}}/>
      </LineChart>
    </ResponsiveContainer>);
  }

  renderBarChart(){
    // debugger
    const colors = ['green', 'purple', 'red', 'black', 'yellow', 'blue', 'brown', 'orange'];
    return (<ResponsiveContainer width="80%" height="100%">
      <BarChart className="chart-show" data={this.dataKey()}>
       <XAxis fill='#000000' stroke='#000000' label={this.props.chartState.x_name} dataKey={this.rowKey()}/>
       <YAxis fill='#000000' stroke='#000000' label={this.props.chartState.y_name}/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey={this.columnKey()} fill="#000000">
         {this.dataKey().map((entry, index) => (
           <Cell key={`cell-${index}`} fill={colors[index % colors.length]}/>
           ))
         }
       </Bar>
      </BarChart>
    </ResponsiveContainer>);
  }

  renderAreaChart(){
    return (<ResponsiveContainer width="80%" height="100%">
      <AreaChart className="chart-show" data={this.dataKey()}>
        <XAxis fill='#000000' stroke='#000000' label={this.props.chartState.x_name} dataKey={this.rowKey()}/>
        <YAxis fill='#000000' stroke='#000000' label={this.props.chartState.y_name}/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Area type='monotone' dataKey={this.columnKey()} stroke='#000000' fill='#000000' />
      </AreaChart>
    </ResponsiveContainer>);
  }

  renderPieChart(){
    const colors = ['green', 'purple', 'red', 'black', 'yellow', 'blue', 'brown', 'orange'];
    return (<ResponsiveContainer width="80%" height="100%">
      <PieChart className="chart-show">
        <Pie label data={this.dataKey()} nameKey={this.rowKey()} valueKey={this.columnKey()} fill="#000000" label>
          {this.dataKey().map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]}/>
            ))
          }
        </Pie>
        <Tooltip/>
       </PieChart>
     </ResponsiveContainer>);
  }

  quantatativeCheck(column){
    let isQuant = true;
    this.dataKey().forEach(object => {
      if(!this.isNumber(object[column])){
        isQuant = false;
      }
    });
    return isQuant;
  }

  isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  renderChart(){
    const colKey = this.columnKey();
    const rowKey = this.rowKey();
    if(this.completeChart() && this.dataKey()) {
      if(this.quantatativeCheck(colKey)){
        switch (this.props.chartState.chartType) {
          case "SCATTER":
          if(this.quantatativeCheck(rowKey)){
            return (
              <div className="chart-element-holder">
                <h2 id="chart-title-header">{this.props.chartState.title}</h2>
                {this.renderScatterChart()}
              </div>);
          }else{
            return (
              <div className="chart-element-holder">
                <h2 className="chart-create-error"> ERROR: X Column must be entirely numeric for Scatter Charts</h2>;
              </div>);
          }
          case "LINE":
            return (
              <div className="chart-element-holder">
                <h2 id="chart-title-header">{this.props.chartState.title}</h2>
                {this.renderLineChart()}
              </div>);
          case "BAR":
            return (
              <div className="chart-element-holder">
                <h2 id="chart-title-header">{this.props.chartState.title}</h2>
                {this.renderBarChart()}
              </div>);
          case "AREA":
            return (
              <div className="chart-element-holder">
                <h2 id="chart-title-header">{this.props.chartState.title}</h2>
                {this.renderAreaChart()}
              </div>);
          case "PIE":
            return (
              <div className="chart-element-holder">
                <h2 id="chart-title-header">{this.props.chartState.title}</h2>
                {this.renderPieChart()}
              </div>);
          default:
            return (
              <div className="chart-element-holder">
                <h2 className="chart-create-error"> ERROR: Not Enough Data to Render Chart</h2>;
              </div>);
        }
      }else{
        return (
          <div className="chart-element-holder">
            <h2 className="chart-create-error"> ERROR: Y Column must be entirely numeric</h2>;
          </div>);
      }
    } else {
        return (
          <div className="chart-element-holder">
            <h2 className="chart-create-error"> ERROR: Not Enough Data to Render Chart</h2>;
          </div>);
    }
  }

  render(){
    return this.renderChart();
  }
}

export default ChartElement;
