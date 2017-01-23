import {RECEIVE_SHARES, RECEIVE_SHARE, REMOVE_SHARE, RECEIVE_SHARED_TO_ME, RECEIVE_USERS} from '../actions/share_actions';
import {merge, omit} from 'lodash';

const _noShares = {
  errors: [],
  sharedCharts: [],
  sharedData: {},
  chartSharedTo: {},
  allOtherUsers: {}
};

const ShareReducer = (state = _noShares, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SHARED_TO_ME:
      const sol = merge({}, state, {sharedCharts: action.chartsArr.shareInfo.charts, sharedData: action.chartsArr.shareInfo.datasets });
      return sol;
    case RECEIVE_SHARES:
      // debugger
      return merge({}, state, {chartSharedTo: action.users});
    case RECEIVE_USERS:
      return merge({}, state, {allOtherUsers: action.users});
    case RECEIVE_SHARE:
      let newUser = {};
      newUser[action.share.user_id] = state.allOtherUsers.users[action.share.user_id];
      let newUsersObj = merge({}, state.chartSharedTo.users, newUser);
      let finalNewUsers = {users: newUsersObj};
      return merge({}, state, {chartSharedTo: finalNewUsers});
    case REMOVE_SHARE:
      const newUsers = omit(state.chartSharedTo.users, action.userId);
      return merge({}, _noShares, {sharedData: state.sharedData, chartSharedTo: {users: newUsers}, allOtherUsers: state.allOtherUsers, sharedCharts: state.sharedCharts});
    default:
      return state;
  }
};



export default ShareReducer;
