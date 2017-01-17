import {connect} from 'react-redux';
import {createChart, updateChart, receiveChartTitle, receiveXAxis, receiveYAxis, receiveDataId, receiveXData, receiveYData} from '../../actions/chart_actions';
import ChartForm from './chart_form';

const mapStateToProps = (store, {location}) => {
  // debugger
  return {
    user_id: store.session.id,
    chartNewState: store.chartsInfo.chartNewState,
    datasets: store.data.datasets,
    formType: location.pathname.slice(1).split("/")[1]
  };
};

const mapDispatchToProps = (dispatch) => ({
  receiveChartTitle: title => dispatch(receiveChartTitle(title)),
  receiveXAxis: x_axis => dispatch(receiveXAxis(x_axis)),
  receiveYAxis: y_axis => dispatch(receiveYAxis(y_axis)),
  receiveDataId: data_id => dispatch(receiveDataId(data_id)),
  receiveXData: x_data => dispatch(receiveXData(x_data)),
  receiveYData: y_data => dispatch(receiveYData(y_data)),
  createChart: chartObj => dispatch(createChart(chartObj)),
  updateChart: chartObj => dispatch(updateChart(chartObj))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartForm);
