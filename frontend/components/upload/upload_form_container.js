import {connect} from 'react-redux';
import {createDataset} from '../../actions/datasets_actions.js';
import UploadForm from './upload_form';

const mapStateToProps = ({data}, {session}) => ({
  datasets: data.username,
  errors: data.errors,
  user_id: session.id
});

const mapDispatchToProps = (dispatch) => ({
  upload: data => dispatch(createDataset(data))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
