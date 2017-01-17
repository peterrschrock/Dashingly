import {connect} from 'react-redux';
import {getDatasets} from '../../actions/datasets_actions';
import ChartElement from './chart_element';

const mapStateToProps = store => {
  return {
    datasets: store.data.datasets,
    chartNewState: store.chartsInfo.chartNewState,
};};

const mapDispatchToProps = dispatch => ({
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartElement);
