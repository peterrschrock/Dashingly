import * as APIUtil from '../util/api_shares_util.js';
export const RECEIVE_SHARES = "RECEIVE_SHARES";
export const RECEIVE_SHARE = "RECEIVE_SHARE";
export const REMOVE_SHARE = "REMOVE_SHARE";
export const RECEIVE_SHARED_TO_ME = "RECEIVE_SHARED_TO_ME";


export const receiveSharedToMeCharts = chartsArr => ({
  type: RECEIVE_SHARED_TO_ME,
  chartsArr
});

export const getSharedToMeCharts = userId => dispatch => (
  APIUtil.getShares(userId, -1)
    .then(chartsArr => dispatch(receiveSharedToMeCharts(chartsArr)))
);

export const receiveShares = users => ({
  type: RECEIVE_SHARES,
  users
});

export const getUsersSharedTo = chartId => dispatch => (
  APIUtil.getShares(-1, chartId)
    .then(users => dispatch(receiveShares(users)))
);
