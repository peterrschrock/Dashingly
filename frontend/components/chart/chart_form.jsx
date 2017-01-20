import React from 'react';
import {bindAll} from 'lodash';
import {withRouter, Link} from 'react-router';

import PieChart from 'react-icons/lib/fa/pie-chart';
import AreaChart from 'react-icons/lib/fa/area-chart';
import BarChart from 'react-icons/lib/fa/bar-chart';
import LineChart from 'react-icons/lib/fa/line-chart';

import ChartElementContainer from './chart_element_container';

class ChartForm extends React.Component {
  constructor(props) {
    super(props);

    bindAll(this, 'setChartType', 'handleSubmitChart','renderDatasetTitles', 'renderColumnOptions', 'handleDataChange', 'handleXDataSource', 'handleYDataSource', 'handleTitleChange', 'handleXNameChange', 'handleYNameChange');

    this.state = {id: null, user_id: this.props.user_id, title: "Title", x_name: "X Axis Name", y_name: "Y Axis Name", chartType: "SCATTER", dataset_id:"", x_data: "", y_data: ""};

    // this.setStateBegin();
  }

  // setStateBegin(){
  //   debugger
  //   if(this.props.formType !== "new" && this.props.charts.length > 0){
  //     const chartObj = this.props.charts[this.props.formType];
  //     this.setState(chartObj);
  //   } else if(this.props.formType !== "new") {
  //     setTimeout(this.setStateBegin(), 100);
  //   } else {
  //     return ;
  //   }
  // }

  componentWillReceiveProps(newProps){
    // debugger
    if(newProps.formType !== "new"){
      if(newProps.charts.length > 0) {
        // const chartObj = newProps.charts[newProps.formType];
        const chartObj = $.grep(newProps.charts, e => {return e.id === parseInt(newProps.formType);})[0];
        this.setState(chartObj);
      }
    }
    // debugger
  }


  // getChartToEdit(chartObj){
  //   this.setState({dataset_id: chartObj.dataset_id.toString()});
  //   this.setState({x_data: chartObj.x_data});
  //   this.props.receiveYData({y_data: chartObj.y_data});
  //   this.setState({title: chartObj.title});
  //   this.setState({x_name: chartObj.x_name});
  //   this.setState({y_name: chartObj.y_name});
  //   this.setState({chartType: chartObj.chartType});
  // }

  setChartType(newChartType){
    this.setState({chartType: newChartType});
  }

  renderDatasetTitles(){
    return Object.keys(this.props.datasets).map(datasetId => {
      const titleDSet = this.props.datasets[datasetId].title;
      return <option key={`${datasetId}-dataset-title`} value={datasetId}>{titleDSet}</option>;
    });
  }

  handleDataChange(event) {
    this.setState({dataset_id: event.target.value});
  }

  renderColumnOptions() {
    if(this.state.dataset_id === "") {
      return <option></option>;
    } else{
      if(this.props.datasets[this.state.dataset_id]){
        return Object.keys(this.props.datasets[this.state.dataset_id].data[0]).map(columnName => {
          return <option key={`${columnName}columnName`} value={columnName}>{columnName}</option>;
          });
      }
    }
  }

  handleXDataSource(event) {
    this.setState({x_data: event.target.value});
  }

  handleYDataSource(event) {
    this.setState({y_data: event.target.value});
  }

  handleTitleChange(event){
    this.setState({title: event.target.value});
  }

  handleXNameChange(event){
    this.setState({x_name: event.target.value});
  }

  handleYNameChange(event){
    this.setState({y_name: event.target.value});
  }

  handleSubmitChart(){
    if(this.props.formType === "new") {
      this.props.createChart(this.state);
    } else {
      this.props.updateChart(this.state, this.state.id);
    }
  }

  render(){
    return <div>
      <form className="chart-form-holder" onSubmit={() => this.handleSubmitChart()}>
        <select value={this.state.dataset_id} onChange={this.handleDataChange}>
          <option disabled selected value> -- select a dataset -- </option>
          {this.renderDatasetTitles()}
        </select>

        <select value={this.state.x_axis} onChange={this.handleXDataSource}>
          {this.renderColumnOptions()}
        </select>

        <select value={this.state.y_axis} onChange={this.handleYDataSource}>
          {this.renderColumnOptions()}
        </select>

        <input type="text" onChange={this.handleTitleChange} value={this.state.title}></input>
        <input type="text" onChange={this.handleXNameChange} value={this.state.x_name}></input>
        <input type="text" onChange={this.handleYNameChange} value={this.state.y_name}></input>
        <div className="chart-type-button-holder">
          <button type="button" onClick={() => this.setChartType("PIE")}><PieChart/></button>
          <button type="button" onClick={() => this.setChartType("AREA")}><AreaChart/></button>
          <button type="button" onClick={() => this.setChartType("BAR")}><BarChart/></button>
          <button type="button" onClick={() => this.setChartType("LINE")}><LineChart/></button>
          <button type="button" onClick={() => this.setChartType("SCATTER")}></button>
        </div>
        <input type="submit" value="Save Changes"></input>
      </form>;
      < ChartElementContainer chartState={this.state}/>;
  </div>;
  }
}

export default withRouter(ChartForm);
