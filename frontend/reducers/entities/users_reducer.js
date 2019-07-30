import { LOGIN_USER, LOGOUT_USER } from '../../actions/session_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case LOGIN_USER:
            return merge({}, state, { [action.user.id]: action.user });
        case LOGOUT_USER:
            newState = merge({}, state);
            delete newState[action.user.id];
            return newState;
        default:
            return state;
    }
};