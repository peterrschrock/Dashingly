import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";



export const login = user => dispatch => (
  APIUtil.login(user)
  .then(thisUser => dispatch(receiveCurrentUser(thisUser)),
        errors => {
          return dispatch(receiveErrors(errors.responseJSON));
        }
  )
);

export const logout = () => dispatch => (
  APIUtil.logout()
  .then(() => dispatch(receiveCurrentUser(null)),
        errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const signup = user => dispatch => (
  APIUtil.signup(user)
  .then(thisUser => dispatch(receiveCurrentUser(thisUser)),
        errors => {
          console.log(errors);
          console.log(errors.responseJSON);
          return dispatch(receiveErrors(errors.responseJSON));
        }
  )
);

export const guestLogin = user => dispatch => (
  APIUtil.guestLogin()
    .then(thisUser => dispatch(receiveCurrentUser(thisUser)),
          errors => dispatch(receiveErrors(errors.responseJSON))
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
