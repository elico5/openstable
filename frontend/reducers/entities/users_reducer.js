import { LOGIN_USER } from '../../actions/session_actions';
import { RECEIVE_STABLE } from '../../actions/stable_actions';
import { GET_USER_INFO, CHANGE_USER_INFO } from '../../actions/user_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case LOGIN_USER:
            return Object.assign({}, state, { [action.payload.user.id]: action.payload.user });
        case RECEIVE_STABLE:
            return Object.assign({}, state, action.payload.users);
        case GET_USER_INFO:
            return Object.assign({}, state, action.payload.users);
        case CHANGE_USER_INFO:
            const newUserObject = Object.assign({}, state[action.user.id], action.user);
            return Object.assign({}, state, { [action.user.id]: newUserObject });
        default:
            return state;
    }
};