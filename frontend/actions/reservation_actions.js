import * as ReservationAPI from '../util/api/reservation_api';

export const RECEIVE_CREATED_RESERVATION = 'RECEIVE_CREATED_RESERVATION';
export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const RECEIVE_CANCELLED_RESERVATION = 'RECEIVE_CANCELLED_RESERVATION';
export const RECEIVE_RESERVATION_ERROR = 'RECEIVE_RESERVATION_ERROR';

export const receiveCreatedReservation = reservation => {
    return {
        type: RECEIVE_CREATED_RESERVATION,
        reservation
    };
};

export const receiveReservations = reservations => {
    return {
        type: RECEIVE_RESERVATIONS,
        reservations
    };
};

export const receiveCancelledReservation = reservation => {
    return {
        type: RECEIVE_CANCELLED_RESERVATION,
        reservation
    };
};

export const receiveReservationError = error => {
    return {
        type: RECEIVE_RESERVATION_ERROR,
        error
    };
};

export const createReservation = (stableId, userId, date, time, partySize) => dispatch => {
    return ReservationAPI.createReservation(stableId, userId, date, time, partySize).then(
        reservation => dispatch(receiveCreatedReservation(reservation)),
        error => dispatch(receiveReservationError(error.responseJSON))
    );
};

export const fetchReservations = userId => dispatch => {
    return ReservationAPI.fetchReservations(userId).then(
        reservations => dispatch(receiveReservations(reservations))
    );
};

export const cancelReservation = reservationId => dispatch => {
    return ReservationAPI.cancelReservation(reservationId).then(
        reservation => dispatch(receiveCancelledReservation(reservation))
    );
};