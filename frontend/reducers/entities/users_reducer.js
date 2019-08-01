import { LOGIN_USER, LOGOUT_USER } from '../../actions/session_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case LOGIN_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case LOGOUT_USER:
            newState = Object.assign({}, state);
            delete newState[action.user.id];
            return newState;
        default:
            return state;
    }
};