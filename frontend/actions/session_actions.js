import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";



export const login = user => dispatch => (
  APIUtil.login(user)
  .then(thisUser => dispatch(receiveCurrentUser(thisUser)),
        errors => dispatch(receiveErrors(errors))
  )
);

export const logout = () => dispatch => (
  APIUtil.logout()
  .then(() => receiveCurrentUser(null),
        (errors) => receiveErrors(errors)
  )
);

export const signup = user => dispatch => (
  APIUtil.signup(user)
  .then(thisUser => receiveCurrentUser(thisUser),
        (errors) => receiveErrors(errors)
  )
);

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
