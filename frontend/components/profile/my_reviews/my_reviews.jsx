import React from 'react';
import ReviewItem from './review_item';
import { connect } from 'react-redux';

const MyReviews = ({ reservations, stables, reviews }) => {
    const reviewObjects = Object.values(reviews);
    if (reviewObjects.length > 0) {
        const reviewItems = reviewObjects.sort((review1, review2) => {
            return reservations[review1.reservation_id].date > reservations[review2.reservation_id].date ? 1 : -1;
        }).map(review => {
            return <ReviewItem key={review.reservation_id}
                review={review}
                reservation={reservations[review.reservation_id]}
                stable={stables[reservations[review.reservation_id].stable_id]} />;
        });
        return (
            <div className='my-reviews-container'>
                {reviewItems}
            </div>
        );
    } else {
        return (
            <div className='my-reviews-container'>
                <div className='no-reviews'>
                    Hey there partner. Looks like you haven't reviewed any stables yet!
                </div>
            </div>
        );
    }
};

const mapStateToProps = ({ entities }) => {
    const { reviews, stables, reservations } = entities;
    return {
        reservations,
        stables,
        reviews
    };
};

export default connect(mapStateToProps)(MyReviews);