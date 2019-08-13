import { RECEIVE_STABLE } from '../../actions/stable_actions';
import { GET_USER_INFO } from '../../actions/user_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_STABLE:
            return Object.assign({}, state, action.payload.reviews);
        case GET_USER_INFO:
            return Object.assign({}, state, action.payload.reviews);
        default:
            return state;
    }
};