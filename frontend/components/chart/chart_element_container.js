import {connect} from 'react-redux';
import ChartElement from './chart_element';

const mapStateToProps = (store, state) => {
  return {
    datasets: store.data.datasets,
    chartState: state.chartState
};};

const mapDispatchToProps = dispatch => ({
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartElement);
