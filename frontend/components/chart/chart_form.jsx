import React from 'react';
import {bindAll} from 'lodash';
import {withRouter, Link} from 'react-router';

class ChartForm extends React.Component {
  constructor(props) {
    super(props);

    bindAll(this, 'handleUserId', 'handleSubmitChart','renderDatasetTitles', 'renderColumnOptions', 'handleDataChange', 'handleXDataSource', 'handleYDataSource', 'handleTitleChange', 'handleXNameChange', 'handleYNameChange');

    this.handleUserId();
  }

  renderDatasetTitles(){
    return Object.keys(this.props.datasets).map(datasetId => {
      const titleDSet = this.props.datasets[datasetId].title;
      return <option key={`${datasetId}-dataset-title`} value={datasetId}>{titleDSet}</option>;
    });
  }

  handleDataChange(event) {
    this.props.receiveDataId(event.target.value);
  }

  renderColumnOptions() {
    if(this.props.chartNewState.dataset_id === "") {
      return <option></option>;
    } else{
      return Object.keys(this.props.datasets[this.props.chartNewState.dataset_id].data[0]).map(columnName => {
        return <option key={`${columnName}columnName`} value={columnName}>{columnName}</option>;
      });
    }
  }

  handleUserId(){
    this.props.receiveUserId(this.props.user_id);
  }

  handleXDataSource(event) {
    this.props.receiveXData(event.target.value);
  }

  handleYDataSource(event) {
    this.props.receiveYData(event.target.value);
  }

  handleTitleChange(event){
    this.props.receiveChartTitle(event.target.value);
  }

  handleXNameChange(event){
    this.props.receiveXAxis(event.target.value);
  }

  handleYNameChange(event){
    this.props.receiveYAxis(event.target.value);
  }

  handleSubmitChart(){
    debugger
    if(this.props.formType === "new") {
      let toSubmit = this.props.chartNewState;
      delete toSubmit.id;
      this.props.createChart(toSubmit);
    } else {
      this.props.updateChart(this.props.chartNewState);
    }
  }

  render(){
    return <form onSubmit={() => this.handleSubmitChart()}>
      <select value={this.props.chartNewState.data_id} onChange={this.handleDataChange}>
        <option selected disabled hidden value=""></option>
        {this.renderDatasetTitles()}
      </select>

      <select value={this.props.chartNewState.x_axis} onChange={this.handleXDataSource}>
        <option selected disabled hidden value=""></option>
        {this.renderColumnOptions()}
      </select>

      <select value={this.props.chartNewState.y_axis} onChange={this.handleYDataSource}>
        <option selected disabled hidden value=""></option>
        {this.renderColumnOptions()}
      </select>

      <input type="text" onChange={this.handleTitleChange} value={this.props.chartNewState.title}></input>
      <input type="text" onChange={this.handleXNameChange} value={this.props.chartNewState.x_name}></input>
      <input type="text" onChange={this.handleYNameChange} value={this.props.chartNewState.y_name}></input>
      <input type="submit" value="Save Changes"></input>
    </form>;
  }
}

export default withRouter(ChartForm);
