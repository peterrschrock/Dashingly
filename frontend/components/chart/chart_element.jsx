import React from 'react';
import {bindAll} from 'lodash';
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class ChartElement extends React.Component {
  constructor(props) {
    super(props);
    // this.props.getDatasets(this.props.user_id);
    bindAll(this, 'data');
  }

  data(){
    debugger
    return this.props.data.datasets["1"].data;
  }

  render(){
    return <ScatterChart width={400} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
      	<XAxis dataKey={'row1'} name='stature' unit='cm'/>
      	<YAxis dataKey={'row2'} name='weight' unit='kg'/>
      	<Scatter name='A school' data={this.data()} fill='#8884d8'/>
      	<CartesianGrid />
      	<Tooltip cursor={{strokeDasharray: '3 3'}}/>
      </ScatterChart>;
  }
}

export default ChartElement;
