import {connect} from 'react-redux';
import {deleteShare, createShare, getUsers, getUsersSharedTo} from '../../actions/share_actions';
import {getCharts} from '../../actions/chart_actions';
import ShareForm from './share_form';

const mapStateToProps = (store, {location}) => ({
  otherUsers: store.shareInfo.allOtherUsers,
  chartSharedTo: store.shareInfo.chartSharedTo,
  charts: store.chartsInfo.charts,
  formType: location.pathname.slice(1).split("/")[1],
  userId: store.session.id
});

const mapDispatchToProps = (dispatch) => {
  return {
    createShare: (userId, chartId) => dispatch(createShare(userId, chartId)),
    deleteShare: (userId, chartId) => dispatch(deleteShare(userId, chartId)),
    getCharts: userId => dispatch(getCharts(userId)),
    getUsers: userId => dispatch(getUsers(userId)),
    getUsersSharedTo: chartId => dispatch(getUsersSharedTo(chartId))
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShareForm);
