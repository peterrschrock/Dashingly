import React from 'react';
import {bindAll} from 'lodash';

import Spinner from 'react-icons/lib/fa/spinner';
import Trash from 'react-icons/lib/fa/trash';
import Close from 'react-icons/lib/fa/close';

class myDatasets extends React.Component {
  constructor(props) {
    super(props);

    this.props.getDatasets(this.props.user_id);
    bindAll(this, 'renderDatasets', 'GottenDatasets', 'renderDataView', 'renderRows', 'renderRow', 'renderDataRows');
  }


  renderColumnNames(dataset) {
    // debugger
    return Object.keys(dataset.data[0]).map((colName, idx) => {
      return <th key={`${dataset.title}${idx}`}>{colName}</th>;
    });
  }

  renderDatasets(){
    // debugger
    let datasets = this.props.data.datasets;
    const self = this;
    return Object.keys(this.props.data.datasets).map(datasetId => {
      // debugger
      return <li key={datasetId} className="dataset-titles">
        <button className="dataset-title-buttons" onClick={() => this.props.changeView(datasetId)}>
          {datasets[datasetId].title}
        </button>
      </li>;
    });
  }

  GottenDatasets() {
    // debugger
    if(Object.keys(this.props.data.datasets).length > 0) {
      return <ul id="list-datasets">
        {this.renderDatasets()}
      </ul>;
    } else {
      return <div></div>;
    }
  }

  renderRow(rowObj, rowIdx) {
    // debugger
    return Object.keys(rowObj).map((datapointKey, colIdx) => {
      return <td key={`${rowIdx}--$${colIdx}`}>{rowObj[datapointKey]}</td>;
    });
  }

  renderDataRows(dataset) {
    // debugger
    return dataset.data.map((rowObj, rowIdx) => {
      return <tr key={`datarow${rowIdx}`}>{this.renderRow(rowObj, rowIdx)}</tr>;
    });
  }

  renderRows(dataset){
    // debugger
    return <div className="table-holder">
      <div className= "table-header-options">
        <h3 className="dataset-title-view">{dataset.title}</h3>
        <button  id="trash-dataset-button" onClick={() => this.props.deleteDataset(this.props.user_id, parseInt(this.props.data.datasetView))}><Trash id="trash-dataset-icon"/></button>
        <button id="closer-button" onClick={() => this.props.changeView("0")}><Close id="closer-icon"/></button>
      </div>
      <div className="table-header-rows">
        <table id="data-view-table">
          <tbody>
            <tr>{this.renderColumnNames(dataset)}</tr>
            {this.renderDataRows(dataset)}
          </tbody>
        </table>
      </div>
    </div>;
  }

  renderDataView(){
    // debugger
    if(this.props.data.datasetView === "0") {
      return <div></div>;
    } else {
      let datasetSelected = this.props.data.datasets[this.props.data.datasetView];
      return this.renderRows(datasetSelected);
    }
  }

  render() {
    return <div id="mydata-holder">
      <section id="my-datasets">
        <h3>My Datasets</h3>
        <h5>Click to View</h5>
        {this.GottenDatasets()}
      </section>
      {this.renderDataView()}
    </div>;
  }
}


export default myDatasets;
