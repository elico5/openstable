export const createReservation = (stableId, userId, date, time, partySize) => {
    return $.ajax({
        method: 'POST',
        url: `/api/stables/${stableId}/reservations`,
        data: {
            resParams: {
                userId,
                date,
                time,
                partySize
            }
        }
    });
};

export const fetchReservations = userId => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/reservations`
    });
};

export const cancelReservation = reservationId => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/reservations/${reservationId}`
    });
};