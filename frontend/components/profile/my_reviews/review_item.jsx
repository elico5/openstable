import React from 'react';
import readMore from '../../../util/render/read_more';
import renderStars from '../../../util/render/render_stars';
import { withRouter } from 'react-router-dom';

const ReviewItem = ({ review, reservation, stable, history }) => {
    const redirectToStableShow = () => {
        history.push(`/stables/${stable.id}`);
    };
    const daysAgo = Math.floor((Date.now() - new Date(reservation.date)) / (1000 * 60 * 60 * 24));
    return (
        <div className='review-item-container'>
            <div onClick={redirectToStableShow} className='review-image-container'>
                <img className='review-stable-image' src={stable.pictureUrl}></img>
            </div>
            <div className='review-right-container'>
                <div className='stable-reservation-container'>
                    <div className='review-stable-details'>
                        <div onClick={redirectToStableShow} className='review-stable-name'>
                            {stable.name}
                        </div>
                        <div className='review-stable-location'>
                            <i className='fas fa-map-marker-alt'></i> {stable.city}, {stable.state}
                        </div>
                    </div>
                    <div className='review-reservation-details'>
                        You stabled {reservation.party_size} {reservation.party_size > 1 ? 'horses' : 'horse'} here {daysAgo} days ago.
                    </div>
                </div>
                <div className='review-summary-container'>
                    {renderStars(review.overall)}
                    <span>|</span>
                    Overall <span>{review.overall}</span>
                    · Service <span>{review.service}</span>
                    · Cleanliness <span>{review.cleanliness}</span>
                    · Value <span>{review.value}</span>
                </div>
                <div className='review-body-container'>
                    <div className='review-body-heading'>You wrote:</div>
                    {readMore(review.body)}
                </div>
            </div>
        </div>
    );
};

export default withRouter(ReviewItem);