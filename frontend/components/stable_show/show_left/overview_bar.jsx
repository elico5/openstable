import React from 'react';

export default ({ rating, reviewCount, price }) => {
    const stars = [1, 2, 3, 4, 5].map((el) => {
        if (el <= rating) {
            return <i className='fas fa-star filled' key={el}></i>;
        } else {
            return <i className='fas fa-star unfilled' key={el}></i>;
        }
    });
    return (
        <div className='overview-bar-container'>
            <div className='stars-container'>
                <div className='stars'>
                    {stars}
                    <span>{rating}</span>
                </div>
            </div>
            <div className='review-count-container'>
                <i className='fas fa-comments'></i>
                <span>{reviewCount} reviews</span>
            </div>
            <div className='price-container'>
                <i className='fas fa-coins'></i>
                <span>{price} cents per hour</span>
            </div>
        </div>
    );
};