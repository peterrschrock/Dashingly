import {connect} from 'react-redux';
import {createDataset} from '../../actions/datasets_actions.js';
import UploadForm from './upload_form';

const mapStateToProps = store => {
  return {
    user_id: store.session.id
};};

const mapDispatchToProps = dispatch => ({
  upload: data => dispatch(createDataset(data))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
