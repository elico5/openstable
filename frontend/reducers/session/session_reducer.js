import { LOGIN_USER, LOGOUT_USER } from '../../actions/session_actions';

const nullState = { id: null };

export default (state = nullState, action) => {
    Object.freeze(state);
    switch(action.type) {
        case LOGIN_USER:
            return { id: action.user.id };
        case LOGOUT_USER:
            return nullState;
        default:
            return state;
    }
};