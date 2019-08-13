import React from 'react';
import { favoriteStable, unfavoriteStable } from '../../../actions/favorite_actions';
import { turnOnModal, LOGIN_FORM_FLAG } from '../../../actions/modal_actions';
import { turnOnLoader, turnOffLoader } from '../../../actions/loader_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const FavoriteButton = ({ currentUserId, stableId, favorites, favorite, unfavorite, turnOnLoginModal, turnOnLoader, turnOffLoader }) => {
    const loadFavorite = (stableId, userId) => {
        turnOnLoader();
        favorite(stableId, userId).then(() => turnOffLoader());
    }
    const loadUnfavorite = (stableId, userId) => {
        turnOnLoader();
        unfavorite(stableId, userId).then(() => turnOffLoader());
    }
    if (!currentUserId) {
        return (
            <button onClick={() => turnOnLoginModal()} className='favorite-stable-button'>
                <i className='far fa-bookmark'></i>
                Favorite this stable
            </button>
        );
    } else if (favorites.includes(stableId)) {
        return (
            <button onClick={() => loadUnfavorite(stableId, currentUserId)} className='favorite-stable-button'>
                <i className='far fa-bookmark'></i>
                Unfavorite this stable
            </button>
        );
    } else {
        return (
            <button onClick={() => loadFavorite(stableId, currentUserId)} className='favorite-stable-button'>
                <i className='far fa-bookmark'></i>
                Favorite this stable
            </button>
        );
    }
};

const mapStateToProps = ({ entities, session }, { match }) => {
    const { favorites } = entities;
    const currentUserId = session.currentUserId;
    if (currentUserId) {
        return {
            currentUserId,
            stableId: parseInt(match.params.stableId),
            favorites
        };
    } else {
        return {
            currentUserId
        };
    }
};

const mapDispatchToProps = dispatch => {
    return {
        favorite: (stableId, userId) => dispatch(favoriteStable(stableId, userId)),
        unfavorite: (stableId, userId) => dispatch(unfavoriteStable(stableId, userId)),
        turnOnLoginModal: () => dispatch(turnOnModal(LOGIN_FORM_FLAG)),
        turnOnLoader: () => dispatch(turnOnLoader()),
        turnOffLoader: () => dispatch(turnOffLoader())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FavoriteButton));