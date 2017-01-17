import React from 'react';
import {bindAll} from 'lodash';
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class ChartElement extends React.Component {
  constructor(props) {
    super(props);
    bindAll(this, 'dataKey', 'rowKey', 'columnKey', 'completeChart', 'renderChart');
  }

  dataKey(){
    return this.props.datasets[this.props.chartNewState.dataset_id].data;
  }

  rowKey(){
    return this.props.chartNewState.x_data;
  }

  columnKey(){
    return this.props.chartNewState.y_data;
  }

  completeChart(){
    const thisChart = this.props.chartNewState;
    let outcome = true;
    Object.keys(thisChart).forEach(keyChart => {
      if(thisChart[keyChart] === ""){
        outcome = false;
      }
    });
    return outcome;
  }

  renderChart(){
    if(this.completeChart()) {
      return <ScatterChart width={400} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
        	<XAxis dataKey={this.rowKey()} name='stature' unit='cm'/>
        	<YAxis dataKey={this.columnKey()} name='weight' unit='kg'/>
        	<Scatter name='A school' data={this.dataKey()} fill='#8884d8'/>
        	<CartesianGrid />
        	<Tooltip cursor={{strokeDasharray: '3 3'}}/>
        </ScatterChart>;
      } else {
          return <h2> Not Enough Data</h2>;
      }
  }



  render(){
    return this.renderChart();
  }
}

export default ChartElement;
