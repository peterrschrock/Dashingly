import {connect} from 'react-redux';
import ChartElement from '../chart/chart_element';

const mapStateToProps = (store, state) => {

  debugger
  return {
    datasets: store.data.datasets,
    chartState: store.chartsInfo.charts[state.whichChart.currentChart]
};};

const mapDispatchToProps = dispatch => ({
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartElement);
