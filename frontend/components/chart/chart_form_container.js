import {connect} from 'react-redux';
import {changeViewChart, receiveChartType, createChart, updateChart, receiveUserId, receiveChartTitle, receiveXAxis, receiveYAxis, receiveDataId, receiveXData, receiveYData} from '../../actions/chart_actions';
import ChartForm from './chart_form';

const mapStateToProps = (store, {location}) => {
  // debugger
  return {
    user_id: store.session.id,
    datasets: store.data.datasets,
    formType: location.pathname.slice(1).split("/")[1],
    charts: store.chartsInfo.charts
  };
};

const mapDispatchToProps = (dispatch) => ({
  createChart: chartObj => dispatch(createChart(chartObj)),
  updateChart: (chartObj, chartId) => dispatch(updateChart(chartObj, chartId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartForm);
