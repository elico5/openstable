import * as UserAPI from '../util/api/user_api';

export const GET_USER_INFO = 'GET_USER_INFO';
export const CHANGE_USER_INFO = 'CHANGE_USER_INFO';
export const RECEIVE_USER_INFO_ERRORS = 'RECEIVE_USER_INFO_ERRORS';

export const receiveUserInfo = payload => {
    return {
        type: GET_USER_INFO,
        payload
    };
};

export const receiveChangedUserInfo = user => {
    return {
        type: CHANGE_USER_INFO,
        user
    };
};

export const fetchUserInfo = userId => dispatch => {
    return UserAPI.getUserInfo(userId).then(
        payload => dispatch(receiveUserInfo(payload))
    );
};

export const receiveUserInfoErrors = errors => {
    return {
        type: RECEIVE_USER_INFO_ERRORS,
        errors
    };
};

export const receiveUserPasswordErrors = errors => {
    return {
        type: RECEIVE_USER_PASSWORD_ERRORS,
        errors
    };
};

export const changeUserInfo = (userId, email, firstName, lastName, phoneNumber, ridingLocation) => dispatch => {
    return UserAPI.changeUserInfo(userId, email, firstName, lastName, phoneNumber, ridingLocation).then(
        user => dispatch(receiveChangedUserInfo(user)),
        errors => dispatch(receiveUserInfoErrors(errors.responseJSON))
    );
}