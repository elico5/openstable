import React from 'react';
import CrossFadeImages from './cross_fade_images';
import FeaturedStables from './featured_stables';
import FeaturedRegions from './featured_regions';
import regionIdToString from '../../util/render/region_id_to_string';
import { REGION_CHANGE_FLAG, turnOnModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const HomeBody = ({ regionId, turnOnModal }) => {
    return (
        <>
            <CrossFadeImages />
            <div className='outer-home-body-container'>
                <div className='inner-home-body-container'>
                    <div className='location-tracker'>
                        <span>It looks like you're in {regionIdToString(regionId)}. Not correct?</span>
                        <span className='location-change-span'
                            onClick={() => turnOnModal(REGION_CHANGE_FLAG)}>
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

const mapStateToProps = ({ session }) => {
    return {
        regionId: session.region
    };
};

const mapDispatchToProps = dispatch => {
    return {
        turnOnModal: flag => dispatch(turnOnModal(flag))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeBody);
