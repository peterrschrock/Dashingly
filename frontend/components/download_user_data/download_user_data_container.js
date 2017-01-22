import {connect} from 'react-redux';
import {getDatasets} from '../../actions/datasets_actions';
import {getCharts} from '../../actions/chart_actions';
import {getSharedToMeCharts, getUsers} from '../../actions/share_actions';
import DownloadUserData from './download_user_data';

const mapStateToProps = store => {
  return {
    userId: store.session.id
  };
};

const mapDispatchToProps = dispatch => ({
  getCharts: userId => dispatch(getCharts(userId)),
  getDatasets: userId => dispatch(getDatasets(userId)),
  getSharedToMeCharts: userId => dispatch(getSharedToMeCharts(userId)),
  getUsers: userId => dispatch(getUsers(userId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DownloadUserData);
