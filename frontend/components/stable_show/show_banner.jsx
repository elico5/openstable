import React from 'react';

export default () => {
    return (
        <div class='banner-img-container'>
            <img src={window.showBannerURL} />
            <button className='favorite-stable-button'>
                <i className='far fa-bookmark'></i>
                Save this stable
            </button>
        </div>
    );
};