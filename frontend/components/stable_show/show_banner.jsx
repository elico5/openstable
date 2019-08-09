import React from 'react';
import FavoriteButton from './show_right/favorite_button';

export default () => {
    return (
        <div className='show-banner-img-container'>
            <img className='show-banner-img' src={window.showBannerURL} />
            <FavoriteButton />
        </div>
    );
};