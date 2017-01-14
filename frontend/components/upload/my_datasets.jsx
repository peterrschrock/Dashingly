import React from 'react';
import {bindAll} from 'lodash';

import Spinner from 'react-icons/lib/fa/spinner';
import Trash from 'react-icons/lib/fa/trash';




class myDatasets extends React.Component {
  constructor(props) {
    super(props);

    this.props.getDatasets(this.props.user_id);
    bindAll(this, 'renderDatasets', 'renderColumns', 'GottenDatasets', 'renderDataView');
  }


  renderColumns(dataset) {
    // debugger
    return Object.keys(dataset.data[0]).map((colName, idx) => {
      console.log(colName);
      return <li key={`${dataset.title}${idx}`}>{colName}</li>;
    });
  }

  renderDatasets(){
    // debugger
    let datasets = this.props.data.datasets;
    return Object.keys(this.props.data.datasets).map(datasetId => {
      // debugger
      return <li key={datasetId}>
        <ul>
          <li key={datasets[datasetId].title}>{datasets[datasetId].title}</li>
          {this.renderColumns(datasets[datasetId])}
          <button><Trash className="nav-icon"/>Delete {datasets[datasetId].title}</button>
        </ul>
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

  renderDataView(){

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
