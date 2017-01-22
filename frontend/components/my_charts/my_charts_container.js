import {connect} from 'react-redux';
import {getCharts} from '../../actions/chart_actions';
import {getDatasets} from '../../actions/datasets_actions';
import ChartsIndex from './charts_index';

const mapStateToProps = store => {
  return {
    datasets: store.data.datasets,
    charts: store.chartsInfo.charts,
    userId: store.session.id,
    shared: false,
    otherUsers: false
};};

const mapDispatchToProps = dispatch => ({
  getCharts: userId => dispatch(getCharts(userId)),
  getDatasets: userId => dispatch(getDatasets(userId)),
  getUsers: () => dispatch(() => {return;}),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartsIndex);
