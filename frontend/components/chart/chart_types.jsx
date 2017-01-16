import React from 'react';
import {bindAll} from 'lodash';

import PieChart from 'react-icons/lib/fa/pie-chart';
import AreaChart from 'react-icons/lib/fa/area-chart';
import BarChart from 'react-icons/lib/fa/bar-chart';
import LineChart from 'react-icons/lib/fa/line-chart';

class ChartTypes extends React.Component {
  constructor(props) {
    super(props);

    bindAll(this, 'setChartType');
  }

  setChartType(newChartType){
    this.props.changeChartType(newChartType);
  }

  render(){
    return <div>
      <button onClick={() => this.setChartType("PIE")}><PieChart/></button>
      <button onClick={() => this.setChartType("AREA")}><AreaChart/></button>
      <button onClick={() => this.setChartType("BAR")}><BarChart/></button>
      <button onClick={() => this.setChartType("LINE")}><LineChart/></button>
      <button onClick={() => this.setChartType("SCATTER")}></button>
    </div>;
  }
}

export default ChartTypes;
