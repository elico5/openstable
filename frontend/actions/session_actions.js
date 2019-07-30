import * as SessionAPI from '../util/session_api';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const loginUser = user => {
    return {
        type: LOGIN_USER,
        user
    };
};

export const logoutUser = user => {
    return {
        type: LOGOUT_USER,
        user
    };
};

export const receiveSessionErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    };
};

export const signup = user => dispatch => {
    return SessionAPI.signup(user).then(
        user => dispatch(loginUser(user)),
        errors => dispatch(receiveSessionErrors(errors.responseJSON))
    );
};

export const login = user => dispatch => {
    return SessionAPI.login(user).then(
        user => dispatch(loginUser(user)),
        errors => dispatch(receiveSessionErrors(errors.responseJSON))
    );
};

export const logout = () => dispatch => {
    return SessionAPI.logout().then(
        user => dispatch(logoutUser(user)),
        errors => dispatch(receiveSessionErrors(errors.responseJSON))
    );
};