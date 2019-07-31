import { LOGIN_USER, LOGOUT_USER } from '../../actions/session_actions';

const nullState = { currentUserId: null };

export default (state = nullState, action) => {
    Object.freeze(state);
    switch(action.type) {
        case LOGIN_USER:
            return { currentUserId: action.user.id };
        case LOGOUT_USER:
            return nullState;
        default:
            return state;
    }
};