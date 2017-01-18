import {connect} from 'react-redux';
import {changeViewChart, receiveChartType, createChart, updateChart, receiveUserId, receiveChartTitle, receiveXAxis, receiveYAxis, receiveDataId, receiveXData, receiveYData} from '../../actions/chart_actions';
import ChartForm from './chart_form';

const mapStateToProps = (store, {location}) => {
  // debugger
  return {
    user_id: store.session.id,
    chartNewState: store.chartsInfo.chartNewState,
    datasets: store.data.datasets,
    formType: location.pathname.slice(1).split("/")[1],
    charts: store.chartsInfo.charts,
    chartViewed: store.chartsInfo.chartViewed
  };
};

const mapDispatchToProps = (dispatch) => ({
  receiveChartType: chartType => dispatch(receiveChartType(chartType)),
  receiveChartTitle: title => dispatch(receiveChartTitle(title)),
  receiveXAxis: x_axis => dispatch(receiveXAxis(x_axis)),
  receiveYAxis: y_axis => dispatch(receiveYAxis(y_axis)),
  receiveDataId: data_id => dispatch(receiveDataId(data_id)),
  receiveXData: x_data => dispatch(receiveXData(x_data)),
  receiveYData: y_data => dispatch(receiveYData(y_data)),
  receiveUserId: userId => dispatch(receiveUserId(userId)),
  createChart: chartObj => dispatch(createChart(chartObj)),
  updateChart: (chartObj, chartId) => dispatch(updateChart(chartObj, chartId)),
  changeViewChart: chartId => dispatch(changeViewChart(chartId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartForm);
