import {connect} from 'react-redux';
import {getSharedToMeCharts, getUsers} from '../../actions/share_actions';
import ChartsIndex from '../my_charts/charts_index';

const mapStateToProps = store => {
  return {
    datasets: store.shareInfo.sharedData,
    charts: store.shareInfo.sharedCharts,
    userId: store.session.id,
    otherUsers: store.shareInfo.allOtherUsers,
    shared: true
};};

const mapDispatchToProps = dispatch => ({
  getCharts: userId => dispatch(getSharedToMeCharts(userId)),
  getDatasets: () => dispatch(() => {return;}),
  getUsers: userId => dispatch(getUsers(userId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartsIndex);
