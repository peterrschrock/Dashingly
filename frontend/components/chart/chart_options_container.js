import {connect} from 'react-redux';
import {deleteChart} from '../../actions/chart_actions';
import ChartOptions from './chart_options';

const mapStateToProps = (store, {location}) => {
  return {
    user_id: store.session.id,
    chart_id: parseInt(location.pathname.slice(1).split("/")[1])
  };
};

const mapDispatchToProps = dispatch => ({
  deleteChart: chartId => dispatch(deleteChart(chartId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartOptions);
