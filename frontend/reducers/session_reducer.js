
import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

const _emptyVessel = {
  username: null,
  id: null,
  errors: []
};

const SessionReducer = (state = _emptyVessel, action) => {
  debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, _emptyVessel, action.user);
    case RECEIVE_ERRORS:
      return merge({}, _emptyVessel, {errors: action.errors});
    default:
      return state;
  }
};

export default SessionReducer;
