import React from 'react';

export default rating => {
    const roundedRating = Math.round(rating);
    const stars = [1, 2, 3, 4, 5].map((el) => {
        if (el <= roundedRating) {
            return <i className='fas fa-star filled' key={el}></i>;
        } else {
            return <i className='fas fa-star unfilled' key={el}></i>;
        }
    });
    return (
        <div className='index-item-stars'>
            {stars}
        </div>
    );
};
