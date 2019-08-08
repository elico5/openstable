import { RECEIVE_STABLE, RECEIVE_STABLES } from '../../actions/stable_actions';
import { RECEIVE_STABLES_AND_SLOTS } from '../../actions/slot_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_STABLE:
            return Object.assign({}, state, { [action.payload.stable.id]: action.payload.stable });
        case RECEIVE_STABLES:
            return action.stables;
        case RECEIVE_STABLES_AND_SLOTS:
            return action.payload.stables;
        default:
            return state;
    }
};