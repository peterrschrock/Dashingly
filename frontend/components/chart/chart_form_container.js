import {connect} from 'react-redux';
import {receiveChartTitle, receiveXAxis, receiveYAxis, receiveDataId, receiveXData, receiveYData} from '../../actions/chart_actions';
import ChartForm from './chart_form';

const mapStateToProps = store => {
  return {
    user_id: store.session.id,
    chartNewState: store.chartsInfo.chartNewState,
    datasets: store.data.datasets
  };
};

const mapDispatchToProps = dispatch => ({
  receiveChartTitle: title => dispatch(receiveChartTitle(title)),
  receiveXAxis: x_axis => dispatch(receiveXAxis(x_axis)),
  receiveYAxis: y_axis => dispatch(receiveYAxis(y_axis)),
  receiveDataId: data_id => dispatch(receiveDataId(data_id)),
  receiveXData: x_data => dispatch(receiveXData(x_data)),
  receiveYData: y_data => dispatch(receiveYData(y_data)),
  formType: location.pathname.slice(2)
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartForm);
