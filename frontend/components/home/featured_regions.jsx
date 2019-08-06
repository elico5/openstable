import React from 'react';
import regionIdToString from '../../util/region_id_to_string';

export default () => {
    return (
        <div className='featured-regions-outer-container'>
            <h1>Featured Regions</h1>
            <div className='aspect-container'>
                <div className='featured-regions-inner-container'>
                    <div className='feature-img-container'>
                        <img src={window.featureNEURL}/>
                    </div>
                    <div className='feature-img-container'>
                        <img src={window.featureSEURL} />
                    </div>
                    <div className='feature-img-container'>
                        <img src={window.featureSURL} />
                    </div>
                    <div className='feature-img-container'>
                        <img src={window.featureMWURL} />
                    </div>
                    <div className='feature-img-container'>
                        <img src={window.featureWURL} />
                    </div>
                    <div className='feature-img-container'>
                        <img src={window.featureOURL} />
                    </div>
                </div>
            </div>
        </div>
    )
};