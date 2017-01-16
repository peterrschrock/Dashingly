import {connect} from 'react-redux';
import {getDatasets, getDataset, changeView, deleteDataset} from '../../actions/datasets_actions.js';
import myDatasets from './my_datasets';

const mapStateToProps = store => {
  return {
    user_id: store.session.id,
    data: store.data
};};

const mapDispatchToProps = dispatch => ({
  getDatasets: userId => dispatch(getDatasets(userId)),
  getDataset: (userId, datasetId) => dispatch(getDataset(userId, datasetId)),
  changeView: datasetId => dispatch(changeView(datasetId)),
  deleteDataset: (userId, datasetId) => dispatch(deleteDataset(userId, datasetId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(myDatasets);
