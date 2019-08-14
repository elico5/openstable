import * as ReviewAPI from '../util/api/review_api';

export const RECEIVE_CREATED_REVIEW = 'RECEIVE_CREATED_REVIEW';

export const receiveCreatedReview = review => {
    return {
        type: RECEIVE_CREATED_REVIEW,
        review
    };
};

export const createReview = (reservationId, overall, service, cleanliness, value, body) => dispatch => {
    return ReviewAPI.createReview(reservationId, overall, service, cleanliness, value, body).then(
        review => dispatch(receiveCreatedReview(review))
    );
};