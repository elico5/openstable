import React from 'react';
import renderStars from '../../util/render/render_stars';
import priceCategory from '../../util/render/price_category';
import { withRouter } from 'react-router-dom';

const FeaturedStableItem = ({ stable, history }) => {
    const toStableShow = () => {
        history.push(`/stables/${stable.id}`)
    };
    return (
        <div className='featured-stable-container' onClick={toStableShow}>
            <div className='featured-stable-image-container'>
                <img className='featured-stable-image' src={stable.pictureUrl} />
            </div>
            <p className='featured-stable-name'>{stable.name} ({stable.state})</p>
            <div className='rating-review-count'>
                {renderStars(stable.overallRating)}
                <span className='review-count'>{stable.reviewCount} reviews</span>
            </div>
            <div className='price-reservation-count'>
                {priceCategory(stable.price)}  •  <i class='fas fa-chart-line' />{stable.bookingsToday} bookings today
            </div>
        </div>
    );
};

export default withRouter(FeaturedStableItem);