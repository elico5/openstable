import React from 'react';
import renderStars from '../../../util/render_stars';
import ReviewList from './review_list';

export default ({ reviewCount, overallRating, serviceRating, cleanlinessRating, valueRating, reviews, users }) => {
    if (reviewCount === 0) {
        return (
            <>
                <div className='reviews-header'>
                    No riders have reviewed this stable yet!
                </div>
                <div className='reviews-summary'>
                    <div className='reviews-summary-text'>
                        Reviews can only be made by riders who have stabled their horse at this location
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            <div className = 'reviews-header'>
                What {reviewCount} Riders Are Saying
            </div>
            <div className='reviews-summary'>
                <div className='reviews-summary-text'>
                    <div className='reviews-summary-header'>Overall ratings and reviews</div>
                    <div>Reviews can only be made by riders who have stabled their horse at this location</div>
                </div>
                <div className='reviews-summary-visual'>
                    <div className='stars'>
                        {renderStars(overallRating)} {overallRating} based on recent ratings
                    </div>
                    <div className='scores-container'>
                        <div className='overall'>
                            <div className='score'>{overallRating}</div>
                            <div>Overall</div>
                        </div>
                        <div className='service'>
                            <div className='score'>{serviceRating}</div>
                            <div>Service</div>
                        </div>
                        <div className='cleanliness'>
                            <div className='score'>{cleanlinessRating}</div>
                            <div>Cleanliness</div>
                        </div>
                        <div className='value'>
                            <div className='score'>{valueRating}</div>
                            <div>Value</div>
                        </div>
                    </div>
                </div>
            </div>
            <ReviewList reviews={reviews} users={users} />
        </>
    );
};