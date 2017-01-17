import {connect} from 'react-redux';
import {receiveChartType} from '../../actions/chart_actions';
import ChartTypes from './chart_types';

const mapStateToProps = store => {
  return {
    user_id: store.session.id,
    chartNewState: store.chartsInfo.chartNewState
  };
};

const mapDispatchToProps = dispatch => ({
  receiveChartType: chartType => dispatch(receiveChartType(chartType)),
  formType: location.pathname.slice(2)
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartTypes);
