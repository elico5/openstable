export const createReview = (reservationId, overall, service, cleanliness, value, body) => {
    return $.ajax({
        method: 'POST',
        url: `/api/reservations/${reservationId}/reviews`,
        data: {
            reviewParams: {
                overall,
                service,
                cleanliness,
                value,
                body,
                reservation_id: reservationId
            }
        }
    });
};

export const fetchReviews = userId => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/reviews`
    });
};