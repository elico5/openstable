import { RECEIVE_STABLE } from '../../actions/stable_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_STABLE:
            return Object.assign({}, state, { [action.stable.id]: action.stable });
        default:
            return state;
    }
};