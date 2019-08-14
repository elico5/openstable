import { RECEIVE_CREATED_RESERVATION, RECEIVE_CANCELLED_RESERVATION } from '../../actions/reservation_actions';
import { GET_USER_INFO } from '../../actions/user_actions';
import { RECEIVE_CREATED_REVIEW } from '../../actions/review_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CREATED_RESERVATION:
            return Object.assign({}, state, { [action.reservation.id]: action.reservation });
        case GET_USER_INFO:
            return action.payload.reservations;
        case RECEIVE_CANCELLED_RESERVATION:
            return Object.assign({}, state, { [action.reservation.id]: action.reservation });
        case RECEIVE_CREATED_REVIEW:
            const reservationId = Object.values(action.review)[0].reservation_id;
            const newReservationObject = Object.assign({}, state[reservationId]);
            newReservationObject.reviewed = true;
            return Object.assign({}, state, { [reservationId]: newReservationObject });
        default:
            return state;
    }
};