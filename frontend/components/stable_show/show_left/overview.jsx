import React from 'react';
import DescriptionToggle from './description_toggle';
import OverviewBar from './overview_bar';

export default ({ name, description }) => {
    return (
        <>
            <div className='stable-name-header'>{name}</div>
            <OverviewBar rating={4.2} reviewCount={100} price={3} />
            <div className='description-container'>
                <DescriptionToggle description={description} />
            </div>
            <div className='reviews-container'></div>
        </>
    );
};