import * as UserAPI from '../util/api/user_api';

export const GET_USER_INFO = 'GET_USER_INFO';

export const receiveUserInfo = payload => {
    return {
        type: GET_USER_INFO,
        payload
    };
};

export const fetchUserInfo = userId => dispatch => {
    return UserAPI.getUserInfo(userId).then(
        payload => dispatch(receiveUserInfo(payload))
    );
};