import React from 'react';
import FavoriteButton from './show_right/favorite_button';

export default () => {
    return (
        <div class='banner-img-container'>
            <img src={window.showBannerURL} />
            <FavoriteButton />
        </div>
    );
};