import { TURN_OFF_MODAL } from '../../actions/modal_actions';
import { RECEIVE_RESERVATION_ERROR } from '../../actions/reservation_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case TURN_OFF_MODAL:
            return [];
        case RECEIVE_RESERVATION_ERROR:
            return action.error;
        default:
            return state;
    }
};