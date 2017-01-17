import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";



export const login = user => dispatch => (
  APIUtil.login(user)
  .then(thisUser => dispatch(receiveCurrentUser(thisUser)),
        errors => {
          return dispatch(receiveErrors(errors));
        }
  )
);

export const logout = () => dispatch => (
  APIUtil.logout()
  .then(() => dispatch(receiveCurrentUser(null)),
        errors => dispatch(receiveErrors(errors))
  )
);

export const signup = user => dispatch => {
  return APIUtil.signup(user)
  .then(thisUser => dispatch(receiveCurrentUser(thisUser)),
  errors => {
    return dispatch(receiveErrors(errors));
  });
};

export const guestLogin = user => dispatch => (
  APIUtil.guestLogin()
    .then(thisUser => dispatch(receiveCurrentUser(thisUser)),
          errors => dispatch(receiveErrors(errors))
        )
);

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors.responseText
});
