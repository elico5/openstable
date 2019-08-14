import { CHANGE_USER_INFO, RECEIVE_USER_INFO_ERRORS } from '../../actions/user_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case CHANGE_USER_INFO:
            return [];
        case RECEIVE_USER_INFO_ERRORS:
            return action.errors;
        default:
            return [];
    }
}