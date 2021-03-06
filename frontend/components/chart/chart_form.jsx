import React from 'react';
import {bindAll} from 'lodash';
import {withRouter, Link, hashHistory} from 'react-router';

import PieChart from 'react-icons/lib/fa/pie-chart';
import AreaChart from 'react-icons/lib/fa/area-chart';
import BarChart from 'react-icons/lib/fa/bar-chart';
import LineChart from 'react-icons/lib/fa/line-chart';
import ScatterChart from 'react-icons/lib/md/border-bottom';
// react-icons/lib/md/apps
// react-icons/lib/md/business
// react-icons/lib/md/image-aspect-ratio

import ChartElementContainer from './chart_element_container';

class ChartForm extends React.Component {
  constructor(props) {
    super(props);

    bindAll(this, 'setChartType', 'handleSubmitChart','renderDatasetTitles', 'renderColumnOptions', 'handleDataChange', 'handleXDataSource', 'handleYDataSource', 'handleTitleChange', 'handleXNameChange', 'handleYNameChange');

    this.state = {id: null, user_id: this.props.user_id, title: "Enter Title...", x_name: "X Axis Name...", y_name: "Y Axis Name...", chartType: "BAR", dataset_id:"", x_data: "", y_data: ""};
  }

  componentWillReceiveProps(newProps){
    if(newProps.formType !== "new"){
      if(newProps.charts.length > 0) {
        const chartObj = $.grep(newProps.charts, e => {return e.id === parseInt(newProps.formType);})[0];
        this.setState(chartObj);
      }
    } else {
      this.setState({id: null, user_id: this.props.user_id, title: "Enter Title...", x_name: "X Axis Name...", y_name: "Y Axis Name...", chartType: "BAR", dataset_id:"", x_data: "", y_data: ""});
    }
  }

  // componentWillUnmount(){
  //   this.setState({id: null, user_id: this.props.user_id, title: "Title", x_name: "X Axis Name", y_name: "Y Axis Name", chartType: "BAR", dataset_id:"", x_data: "", y_data: ""});
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

  // getCaroselPos(){
  //   this.props.charts.forEach((chart, idx) => {
  //     if(chart.id === this.state.id){
  //       console.log(idx);
  //       return idx;
  //     }
  //   });
  //   return 0;
  // }

  handleSubmitChart(){
    if(this.props.formType === "new") {
      localStorage.setItem('SelectedChart', this.props.charts.length);
      this.props.createChart(this.state);
    } else {
      localStorage.setItem('SelectedChart', this.props.charts.length - 1);
      this.props.updateChart(this.state, this.state.id);
    }
    hashHistory.push("/charts");
  }

  render(){
    return (<div className="chart-form-element">
      <form className="chart-form-holder"  onSubmit={() => this.handleSubmitChart()}>
        <select required value={this.state.dataset_id} className="chart-form-part" ref={(input) => this.input = input} onChange={this.handleDataChange}>
          <option value="" disabled>Select a Dataset</option>
          {this.renderDatasetTitles()}
        </select>

        <select required value={this.state.x_data} className="chart-form-part" ref={(input) => this.input = input} onChange={this.handleXDataSource}>
          <option value="" disabled>Select data for X axis</option>
          {this.renderColumnOptions()}
        </select>

        <select required value={this.state.y_data} className="chart-form-part" onChange={this.handleYDataSource}>
          <option value="" disabled>Select data for X axis</option>
          {this.renderColumnOptions()}
        </select>

        <input type="text" className="chart-form-part" onChange={this.handleTitleChange} value={this.state.title}></input>
        <input type="text" className="chart-form-part" onChange={this.handleXNameChange} value={this.state.x_name}></input>
        <input type="text" className="chart-form-part" onChange={this.handleYNameChange} value={this.state.y_name}></input>
        <div className="chart-form-buttons" >
          <button className="chart-form-button" type="button" onClick={() => this.setChartType("PIE")}><PieChart/></button>
          <button className="chart-form-button" type="button" onClick={() => this.setChartType("AREA")}><AreaChart/></button>
          <button className="chart-form-button" type="button" onClick={() => this.setChartType("BAR")}><BarChart/></button>
          <button className="chart-form-button" type="button" onClick={() => this.setChartType("LINE")}><LineChart/></button>
          <button className="chart-form-button" type="button" onClick={() => this.setChartType("SCATTER")}><ScatterChart/></button>
        </div>
        <input className="chart-form-part" id="chart-form-submit-button" type="submit" value="Save Changes"></input>
      </form>
      < ChartElementContainer chartState={this.state}/>
  </div>);
  }
}

export default withRouter(ChartForm);
