import {connect} from 'react-redux';
// import {getCharts} from '../../actions/charts_actions';
import ChartsIndex from './charts_index';

const mapStateToProps = store => {
  return {
    datasets: store.data.datasets,
    charts: store.chartsInfo.charts
};};

const mapDispatchToProps = dispatch => ({
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartsIndex);
