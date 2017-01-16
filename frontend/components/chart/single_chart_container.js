import {connect} from 'react-redux';
import {getDatasets} from '../../actions/datasets_actions';
import ChartElement from './chart_element';

const mapStateToProps = store => {
  return {
    user_id: store.session.id,
    data: store.data
};};

const mapDispatchToProps = dispatch => ({
  getDatasets: userId => dispatch(getDatasets(userId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartElement);
