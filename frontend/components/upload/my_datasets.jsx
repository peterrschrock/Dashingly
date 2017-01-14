import React from 'react';
import {bindAll} from 'lodash';

import Spinner from 'react-icons/lib/fa/spinner';
import Trash from 'react-icons/lib/fa/trash';

class myDatasets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {datasetSelector: -1};

    this.props.getDatasets(this.props.user_id);
    bindAll(this, 'renderDatasets', 'GottenDatasets', 'renderDataView', 'renderRows', 'renderRow', 'renderDataRows');
  }

  // selectDatasetView(datasetId){
  //   this.setState({datasetSelector: datasetId});
  // }


  renderColumnNames(dataset) {
    // debugger
    return Object.keys(dataset).map((colName, idx) => {
      return <th key={`${dataset.title}${idx}`}>{colName}</th>;
    });
  }

  // componentDidMount() {
  //   this.state.datasetSelector = 1;
  // }

  renderDatasets(){
    // debugger
    let datasets = this.props.data.datasets;
    const self = this;
    return Object.keys(this.props.data.datasets).map(datasetId => {
      // debugger
      return <li key={datasetId} >
        <button onClick={() => this.setState({datasetSelector: datasetId})}>
          {datasets[datasetId].title}
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
    return <table id="data-view-table">
      <tbody>
        <tr>{this.renderColumnNames(dataset)}</tr>
        {this.renderDataRows(dataset)}
      </tbody>
    </table>;
  }

  renderDataView(){
    // debugger
    if(this.state.datasetSelector === -1) {
      return <table></table>;
    } else {
      let datasetSelected = this.props.data.datasets[this.state.datasetSelector];
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
