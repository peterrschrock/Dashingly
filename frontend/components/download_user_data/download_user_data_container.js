import {connect} from 'react-redux';
import {getDatasets} from '../../actions/datasets_actions';
import {getCharts} from '../../actions/chart_actions';
import DownloadUserData from './download_user_data';

const mapStateToProps = store => {
  return {
    userId: store.session.id
  };
};

const mapDispatchToProps = dispatch => ({
  getCharts: userId => dispatch(getCharts(userId)),
  getDatasets: userId => dispatch(getDatasets(userId)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DownloadUserData);
