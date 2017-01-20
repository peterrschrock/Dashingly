import {RECEIVE_SHARES, RECEIVE_SHARE, REMOVE_SHARE, RECEIVE_SHARED_TO_ME} from '../actions/share_actions';
import {merge} from 'lodash';

const _noShares = {
  errors: [],
  sharedCharts: [],
  chartSharedTo: {},
  allOtherUsers: {}
};

const ShareReducer = (state = _noShares, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SHARED_TO_ME:
      return merge({}, state, {sharedCharts: action.chartsArr});
    case RECEIVE_SHARES:
      return merge({}, state, {chartSharedTo: action.users});
    // case RECEIVE_SHARE:
    default:
      return state;
  }
};



export default ShareReducer;
