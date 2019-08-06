import React from 'react';
import ReadMore from '../../../util/read_more';
import OverviewBar from './overview_bar';

export default ({ name, description, overallRating, reviewCount, price }) => {
    return (
        <>
            <div className='stable-name-header'>{name}</div>
            <OverviewBar rating={overallRating} reviewCount={reviewCount} price={price} />
            <div className='description-container'>
                {ReadMore(description)}
            </div>
        </>
    );
};