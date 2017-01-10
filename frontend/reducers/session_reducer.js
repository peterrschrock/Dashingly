import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';
import lodash from 'lodash';

const _emptyVessel = {
  username: null,
  errors: []
};

const SessionReducer = (state = _emptyVessel, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return lodash.merge({}, _emptyVessel, action.user);
    case RECEIVE_ERRORS:
      return lodash.merge({}, _emptyVessel, action.errors);
    default:
      return state;
  }
};

export default SessionReducer;
