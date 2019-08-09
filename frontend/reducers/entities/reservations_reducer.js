import { RECEIVE_CREATED_RESERVATION } from '../../actions/reservation_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CREATED_RESERVATION:
            return Object.assign({}, state, { [action.reservation.id]: action.reservation });
        default:
            return state;
    }
};