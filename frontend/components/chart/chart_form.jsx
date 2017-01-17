import React from 'react';
import {bindAll} from 'lodash';

class ChartForm extends React.Component {
  constructor(props) {
    super(props);

    bindAll(this, 'renderDatasetTitles', 'renderColumnOptions', 'handleDataChange', 'handleXDataSource', 'handleYDataSource');
  }

  renderColumnOptions() {

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
    if(this.props.chartNewState.data_id === "") {
      return <option></option>;
    } else{
      return Object.keys(this.props.datasets[this.props.chartNewState.data_id].data[0]).map(columnName => {
        return <option key={`${columnName}columnName`} value={columnName}>{columnName}</option>;
      });
    }
  }

  handleXDataSource(event) {
    this.props.receiveXData(event.target.value);
  }

  handleYDataSource(event) {
    this.props.receiveYData(event.target.value);
  }

  render(){
    return <form>
      <select value={this.props.chartNewState.data_id} onChange={this.handleDataChange}>
        {this.renderDatasetTitles()}
      </select>

      <select value={this.props.chartNewState.x_axis} onChange={this.handleXDataSource}>
        {this.renderColumnOptions()}
      </select>

      <select value={this.props.chartNewState.y_axis} onChange={this.handleYDataSource}>
        {this.renderColumnOptions()}
      </select>

      <input type="text"></input>
      <input type="text"></input>
      <input type="text"></input>
    </form>;
  }
}

export default ChartForm;
