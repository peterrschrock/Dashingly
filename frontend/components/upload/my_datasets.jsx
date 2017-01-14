import React from 'react';
import {bindAll} from 'lodash';

import Spinner from 'react-icons/lib/fa/spinner';
import Trash from 'react-icons/lib/fa/trash';

class myDatasets extends React.Component {
  constructor(props) {
    super(props);

    this.store = {datasetSelector: -1};

    this.props.getDatasets(this.props.user_id);
    bindAll(this, 'selectDatasetView', 'renderDatasets', 'GottenDatasets', 'renderDataView', 'renderRows', 'renderRow', 'renderDataRows');
  }

  selectDatasetView(datasetId){
    this.store = {datasetSelector: datasetId};
    console.log(this.store.datasetSelector);
  }


  renderColumnNames(dataset) {
    // debugger
    return Object.keys(dataset).map((colName, idx) => {
      return <li key={`${dataset.title}${idx}`}>{colName}</li>;
    });
  }

  componentDidMount() {
    this.store = {datasetSelector: 1};
    console.log(this.store.datasetSelector);
  }

  renderDatasets(){
    // debugger
    let datasets = this.props.data.datasets;
    return Object.keys(this.props.data.datasets).map(datasetId => {
      // debugger
      return <li key={datasetId} >
        <button onClick={() => this.selectDatasetView(datasetId)}>
          <li key={datasets[datasetId].title}>{datasets[datasetId].title}</li>
          {this.renderColumnNames(datasets[datasetId])}
        </button>
        <button><Trash className="nav-icon"/>Delete {datasets[datasetId].title}</button>
      </li>;
    });
  }

  GottenDatasets() {
    // debugger
    if(Object.keys(this.props.data.datasets).length > 0) {
      return <ul>
        {this.renderDatasets()}
      </ul>;
    } else {
      return <Spinner/>;
    }
  }

  renderRow(rowObj, rowIdx) {
    // debugger
    return Object.keys(rowObj).map((datapointKey, colIdx) => {
      return <li key={`${rowIdx}--$${colIdx}`}>{rowObj[datapointKey]}</li>;
    });
  }

  renderDataRows(dataset) {
    // debugger
    return dataset.data.map((rowObj, rowIdx) => {
      return <ul key={`datarow${rowIdx}`}>{this.renderRow(rowObj, rowIdx)}</ul>;
    });
  }

  renderRows(dataset){
    // debugger
    return <ul>
      <ul>{this.renderColumnNames(dataset)}</ul>
      <ul>{this.renderDataRows(dataset)}</ul>
    </ul>;
  }

  renderDataView(){
    // debugger
    if(this.store.datasetSelector === -1) {
      return <ul></ul>;
    } else {
      let datasetSelected = this.props.data.datasets[this.store.datasetSelector];
      // debugger
      return this.renderRows(datasetSelected);
    }
  }

  render() {
    return <div>
      <section>
        <h3>My Datasets</h3>
        {this.GottenDatasets()}
      </section>
      {this.renderDataView()}
    </div>;
  }
}


export default myDatasets;
