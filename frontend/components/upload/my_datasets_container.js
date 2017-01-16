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
  getDataset: (datasetId) => dispatch(getDataset(datasetId)),
  changeView: datasetId => dispatch(changeView(datasetId)),
  deleteDataset: (datasetId) => dispatch(deleteDataset(datasetId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(myDatasets);
