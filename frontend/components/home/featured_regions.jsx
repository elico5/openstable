import React from 'react';
import regionIdToString from '../../util/region_id_to_string';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const FeaturedRegions = ({ history }) => {
    const now = new Date();
    const YYYY = now.getFullYear();
    const MM = String(now.getMonth() + 1).padStart(2, '0');
    const DD = String(now.getDate() + 1).padStart(2, '0');
    const today = [YYYY, MM, DD].join("-");
    const time = '12:00';
    const partySize = 1;
    const redirectToSearch = id => {
        history.push(`/search/region=${id}+date=${today}+time=${time}+partysize=${partySize}`)
    }
    return (
        <div className='featured-regions-outer-container'>
            <h1>Featured Regions</h1>
            <div className='aspect-container'>
                <div className='featured-regions-inner-container'>
                    <div className='feature-img-container' onClick={() => redirectToSearch(1)}>
                        <img src={window.featureNEURL}/>
                        <div className='featured-region-label'>{regionIdToString(1)}</div>
                    </div>
                    <div className='feature-img-container' onClick={() => redirectToSearch(2)}>
                        <img src={window.featureSEURL} />
                        <div className='featured-region-label'>{regionIdToString(2)}</div>
                    </div>
                    <div className='feature-img-container' onClick={() => redirectToSearch(4)}>
                        <img src={window.featureSURL} />
                        <div className='featured-region-label'>{regionIdToString(4)}</div>
                    </div>
                    <div className='feature-img-container' onClick={() => redirectToSearch(3)}>
                        <img src={window.featureMWURL} />
                        <div className='featured-region-label'>{regionIdToString(3)}</div>
                    </div>
                    <div className='feature-img-container' onClick={() => redirectToSearch(5)}>
                        <img src={window.featureWURL} />
                        <div className='featured-region-label'>{regionIdToString(5)}</div>
                    </div>
                    <div className='feature-img-container' onClick={() => redirectToSearch(6)}>
                        <img src={window.featureOURL} />
                        <div className='featured-region-label'>{regionIdToString(6)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state, { history }) => {
    return {
        history
    };
};

export default withRouter(connect(mapStateToProps)(FeaturedRegions));