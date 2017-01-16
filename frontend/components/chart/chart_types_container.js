import {connect} from 'react-redux';
import {changeChartType} from '../../actions/chart_actions';
import ChartTypes from './chart_types';

const mapStateToProps = store => {
  return {
    user_id: store.session.id,
    chartViewed: store.charts.chartViewed,
    chartType: store.charts.chartData[store.charts.chartViewed].chartType
  };
};

const mapDispatchToProps = dispatch => ({
  changeChartType: (chartType) => dispatch(changeChartType(chartType))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartTypes);
