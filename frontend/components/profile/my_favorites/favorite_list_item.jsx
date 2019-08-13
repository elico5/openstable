import React from 'react';
import renderStars from '../../../util/render/render_stars';
import regionIdToString from '../../../util/render/region_id_to_string';
import { turnOnLoader, turnOffLoader } from '../../../actions/loader_actions';
import { unfavoriteStable } from '../../../actions/favorite_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const FavoriteListItem = ({ currentUserId, stable, history, turnOnLoader, turnOffLoader, unfavoriteStable }) => {
    const redirectToStableShow = () => {
        history.push(`/stables/${stable.id}`);
    };
    const deleteFavorite = () => {
        turnOnLoader();
        unfavoriteStable(stable.id, currentUserId).then(
            () => turnOffLoader()
        );
    };
    return (
        <div className='favorite-list-item-container'>
            <div onClick={redirectToStableShow} className='favorite-stable-image-container'>
                <img className='favorite-stable-image' src={stable.pictureUrl}></img>
            </div>
            <div className='favorite-stable-info-container'>
                <div onClick={redirectToStableShow} className='favorite-stable-name'>
                    {stable.name}
                </div>
                <div className='favorite-stable-stars'>
                    {renderStars(stable.overallRating)}
                </div>
                <div className='favorite-stable-location'>
                    <i className='fas fa-map-marker-alt'></i> {stable.city}, {stable.state}
                </div>
                <div className='favorite-stable-region'>
                    <i className='fas fa-globe-americas'></i> {regionIdToString(stable.region)}
                </div>
            </div>
            <div className='favorite-stable-buttons-container'>
                <button className='reservation-button' onClick={redirectToStableShow}>
                    Make Reservation
                </button>
                <button className='unfavorite-button' onClick={deleteFavorite}>
                    <i className='far fa-bookmark'></i>Remove From Favorites
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        turnOnLoader: () => dispatch(turnOnLoader()),
        turnOffLoader: () => dispatch(turnOffLoader()),
        unfavoriteStable: (stableId, userId) => dispatch(unfavoriteStable(stableId, userId))
    };
};

export default withRouter(connect(null, mapDispatchToProps)(FavoriteListItem));