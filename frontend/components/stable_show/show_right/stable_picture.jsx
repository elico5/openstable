import React from 'react';

export default ({ pictureUrl }) => {
    return (
        <div className='stable-picture-container'>
            <img src={pictureUrl} className='stable-picture'></img>
        </div>
    );
};