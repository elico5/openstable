import React from 'react';

export default () => {
    return (
        <div className='profile-banner-img-container'>
            <img className='profile-banner-img' src={window.profileBannerURL}/>
        </div>
    );
};