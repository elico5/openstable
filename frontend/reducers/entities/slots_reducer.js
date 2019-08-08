import { RECEIVE_SLOTS, CLEAR_SLOTS, RECEIVE_STABLES_AND_SLOTS } from '../../actions/slot_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SLOTS:
            return action.slots;
        case RECEIVE_STABLES_AND_SLOTS:
            return action.payload.slots;
        case CLEAR_SLOTS:
            return {};
        default:
            return state;
    }
};