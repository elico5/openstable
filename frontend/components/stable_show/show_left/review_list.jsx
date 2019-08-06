import React from 'react';
import ReviewListItem from './review_list_item';

export default ({ users, reviews }) => {
    const reviewListItems = Object.values(reviews).map(review => {
        return <ReviewListItem key={review.id} review={review} user={users[review.userId]} />;
    })
    return (
        <div className='review-list-container'>
            {reviewListItems}
        </div>
    );
};