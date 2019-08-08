import React from 'react';
import renderStars from '../../../util/render/render_stars';
import ReadMore from '../../../util/render/read_more';

export default ({ review, user }) => {
    const reviewColor = ['gray', 'dark', 'tan'][Math.floor(Math.random() * 3)];
    const daysAgo = Math.floor((Date.now() - new Date(review.reservationDate)) / (1000 * 60 * 60 * 24));
    return (
        <div className='review-list-item-outer-container'>
            <div className='review-list-item-left-container'>
                <i className={'fas fa-user-circle ' + reviewColor} />
                <div className='user-name'>{user.first_name + " " + user.last_name[0].toUpperCase() + '.'}</div>
                <div className='user-review-count'>
                    <i className='fas fa-comment ' />
                    {user.reviewCount} {user.reviewCount > 1 ? 'reviews' : 'review'}
                </div>
            </div>
            <div className='review-list-item-right-container'>
                <div className='review-stars'>
                    {renderStars(review.overall)}
                    · Stabled {daysAgo} {daysAgo > 1 ? 'days' : 'day'} ago
                </div>
                <div className='review-scores'>
                    Overall <span>{review.overall}</span>
                    · Service <span>{review.service}</span>
                    · Cleanliness <span>{review.cleanliness}</span>
                    · Value <span>{review.value}</span>
                </div>
                <div className='review-body'>
                    {ReadMore(review.body, review.id.toString())}
                </div>
            </div>
        </div>
    );
};