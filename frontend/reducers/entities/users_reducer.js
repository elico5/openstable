import { LOGIN_USER, LOGOUT_USER } from '../../actions/session_actions';
import { RECEIVE_STABLE } from '../../actions/stable_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case LOGIN_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_STABLE:
            return Object.assign({}, state, action.payload.users)
        default:
            return state;
    }
};