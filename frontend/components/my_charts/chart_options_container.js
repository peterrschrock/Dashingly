import {connect} from 'react-redux';
import {deleteChart} from '../../actions/chart_actions';
// import {getDatasets} from '../../actions/datasets_actions';
import ChartOptions from './chart_options';

const mapStateToProps = (store, state) => {
  return {
    whichChart: state.passState.whichChart,
    charts: state.passState.charts,
    userId: store.session.id
};};

const mapDispatchToProps = dispatch => ({
  deleteChart: chartId => dispatch(deleteChart(chartId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartOptions);
