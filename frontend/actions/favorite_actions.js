import * as FavoriteAPI from '../util/api/favorite_api';

export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const RECEIVE_UNFAVORITE = 'RECEIVE_UNFAVORITE';

export const receiveFavorite = favorite => {
    return {
        type: RECEIVE_FAVORITE,
        favorite
    };
};

export const receiveUnfavorite = unfavorite => {
    return {
        type: RECEIVE_UNFAVORITE,
        unfavorite
    };
};

export const favoriteStable = (stableId, userId) => dispatch => {
    return FavoriteAPI.favoriteStable(stableId, userId).then(
        favorite => dispatch(receiveFavorite(favorite))
    );
};

export const unfavoriteStable = (stableId, userId) => dispatch => {
    return FavoriteAPI.unfavoriteStable(stableId, userId).then(
        unfavorite => dispatch(receiveUnfavorite(unfavorite))
    );
};