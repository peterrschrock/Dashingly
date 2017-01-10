import {connect} from 'react-redux';
import { logout} from '../../actions/session_actions.js';
import NavBar from './nav_bar';

const mapStateToProps = ({session}) => ({
  username: session.username,
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
