import {connect} from 'react-redux';
import { signup, login} from '../../actions/session_actions.js';
import CreateSessionForm from './create_session_form';

const mapStateToProps = ({session}) => ({
  username: session.username,
  errors: session.errors
});

const mapDispatchToProps = (dispatch, {location}) => {
  const thisForm = location.pathname.slice(1);
  const thisAction = thisForm==='signup' ? signup : login;

  return {
    whichForm: thisForm,
    whichAction: user => dispatch(thisAction(user))
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSessionForm);
