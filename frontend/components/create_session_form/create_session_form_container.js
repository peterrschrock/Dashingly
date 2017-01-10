import {connect} from 'react-redux';
import { signup, login} from '../../actions/session_actions.js';
import Auth from './auth';

const mapStateToProps = ({session}) => ({
  username: session.user,
  errors: session.errors
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
