import { RECEIVE_SLOTS, CLEAR_SLOTS } from '../../actions/slot_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SLOTS:
            return action.slots;
        case CLEAR_SLOTS:
            return {};
        default:
            return state;
    }
};