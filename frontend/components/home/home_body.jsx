import React from 'react';
import CrossFadeImages from './cross_fade_images';
import FeaturedStables from './featured_stables';
import FeaturedRegions from './featured_regions';
import regionIdToString from '../../util/region_id_to_string';

export default () => {
    const regionId = 1;
    return (
        <>
            <CrossFadeImages />
            <div className='outer-home-body-container'>
                <div className='inner-home-body-container'>
                    <div className='location-tracker'>
                        <span>It looks like you're in {regionIdToString(regionId)}. Not correct?</span>
                        <span className='location-change-span'>
                            <i className='fas fa-location-arrow'></i>
                            Change current region
                        </span>
                    </div>
                    <FeaturedStables regionId={regionId}/>
                    <FeaturedRegions />
                </div>
            </div>
        </>
    );
};