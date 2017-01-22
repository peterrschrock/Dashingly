import * as APIUtil from '../util/api_shares_util.js';
export const RECEIVE_SHARES = "RECEIVE_SHARES";
export const RECEIVE_SHARE = "RECEIVE_SHARE";
export const REMOVE_SHARE = "REMOVE_SHARE";
export const RECEIVE_SHARED_TO_ME = "RECEIVE_SHARED_TO_ME";
export const RECEIVE_USERS = "RECEIVE_USERS";


export const receiveSharedToMeCharts = chartsArr => ({
  type: RECEIVE_SHARED_TO_ME,
  chartsArr
});

export const getSharedToMeCharts = userId => dispatch => {
  return APIUtil.getShares(userId, -1)
  .then(chartsArr => dispatch(receiveSharedToMeCharts(chartsArr)));
};

export const receiveShares = users => ({
  type: RECEIVE_SHARES,
  users
});

export const getUsersSharedTo = chartId => dispatch => (
  APIUtil.getShares(-1, chartId)
    .then(users => dispatch(receiveShares(users)))
);

export const receiveShare = share => ({
  type: RECEIVE_SHARE,
  share
});

export const createShare = (userId, chartId) => dispatch => (
  APIUtil.createShare({user_id: userId, chart_id: chartId})
    .then(shareObj => dispatch(receiveShare(shareObj)))
);

export const removeShare = share => ({
  type: REMOVE_SHARE,
  share
});

export const deleteShare = shareId => dispatch => (
  APIUtil.deleteShare(shareId)
    .then(shareObj => dispatch(removeShare(shareObj)))
);

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const getUsers = userId => dispatch => (
  APIUtil.getOtherUsers(userId)
    .then(usersObj => dispatch(receiveUsers(usersObj)))
);
