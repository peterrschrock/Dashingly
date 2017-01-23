import React from 'react';
import {bindAll} from 'lodash';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';

import Edit from 'react-icons/lib/md/edit';
import Share from 'react-icons/lib/fa/share-square-o';
import Trash from 'react-icons/lib/fa/trash';
import InsertChart from 'react-icons/lib/md/insert-chart';

class ChartOptions extends React.Component {
  constructor(props){
    super(props);

    bindAll(this, 'shareChart', 'editChart', 'newChart', 'deleteChart');
  }

  shareChart(){
    hashHistory.push(`/charts/${this.props.charts[this.props.whichChart].id}/share`);
  }

  editChart(){
    hashHistory.push(`/charts/${this.props.charts[this.props.whichChart].id}/edit`);
  }

  newChart(){
    hashHistory.push("/charts/new");
  }

  deleteChart(){
    this.props.deleteChart(this.props.charts[this.props.whichChart].id);
  }

  render(){
    return <div className="chart-options-div">
      <ul className="chart-options-crud">
        <button className="nav-icon-button" onClick={this.newChart}><InsertChart className="nav-icon"/>Create New Chart</button>
        <button className="nav-icon-button" onClick={this.editChart}><Edit className="nav-icon"/>Edit This Chart</button>
        <button className="nav-icon-button" onClick={this.shareChart}><Share className="nav-icon"/>Share This Chart</button>
        <button className="nav-icon-button" onClick={this.deleteChart}><Trash className="nav-icon"/>Delete This Chart</button>
      </ul>
    </div>;
  }
}


export default ChartOptions;
