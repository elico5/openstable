import { RECEIVE_STABLE } from '../../actions/stable_actions';
import { GET_USER_INFO } from '../../actions/user_actions';
import { RECEIVE_CREATED_REVIEW } from '../../actions/review_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_STABLE:
            return action.payload.reviews;
        case GET_USER_INFO:
            return action.payload.reviews;
        case RECEIVE_CREATED_REVIEW:
            return Object.assign({}, state, action.review);
        default:
            return state;
    }
};