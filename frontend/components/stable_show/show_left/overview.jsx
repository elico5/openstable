import React from 'react';
import DescriptionToggle from './description_toggle';

export default ({ name, description }) => {
    return (
        <>
            <div className='stable-name-header'>{name}</div>
            <div className='description-container'>
                <DescriptionToggle description={description} />
            </div>
            <div></div>
        </>
    );
};