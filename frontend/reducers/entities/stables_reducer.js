import { RECEIVE_STABLE, RECEIVE_STABLES } from '../../actions/stable_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_STABLE:
            return Object.assign({}, state, { [action.payload.stable.id]: action.payload.stable });
        case RECEIVE_STABLES:
            return action.stables;
        default:
            return state;
    }
};