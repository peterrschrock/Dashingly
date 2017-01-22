import {connect} from 'react-redux';
import ChartElement from '../chart/chart_element';

const mapStateToProps = (store, state) => {
  return {
    datasets: store.shareInfo.sharedData,
    chartState: state.passState.charts[state.passState.whichChart]
};};

const mapDispatchToProps = dispatch => ({
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartElement);
