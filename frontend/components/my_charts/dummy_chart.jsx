const D3Basic = require('react-d3-basic');

const chartData = [{
  name: "series1",
  values: [{x:0, y: 10}, {x:15, y:20}]
}];

export const dummyChart = () => (
  <D3Basic.ScatterChart data={chartData} width={500} height={400} title="ScatterChart"/>
);
