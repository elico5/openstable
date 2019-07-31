import { LOGIN_USER, RECEIVE_SESSION_ERRORS } from '../../actions/session_actions';
import { TURN_OFF_MODAL } from '../../actions/modal_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case LOGIN_USER:
            return [];
        case TURN_OFF_MODAL:
            return [];
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        default:
            return state;
    }
};