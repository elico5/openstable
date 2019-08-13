import React from 'react';
import FavoriteListItem from './favorite_list_item';
import { connect } from 'react-redux';

const MyFavorites = ({ currentUserId, stables, favorites }) => {
    if (favorites.length > 0) {
        const favoriteListItems = favorites.map((stableId, i) => {
            return <FavoriteListItem currentUserId={currentUserId} key={i} stable={stables[stableId]} />;
        });
        return (
            <div className='my-favorites-container'>
                {favoriteListItems}
            </div>
        );
    } else {
        return (
            <div className='my-favorites-container'>
                <div className='no-current-favorites'>
                    Hey there partner. Looks like you haven't favorited any stables yet!
                </div>
            </div>
        );
    }
};

const mapStateToProps = ({ entities, session }) => {
    const { currentUserId } = session;
    const { favorites, stables } = entities;
    return {
        favorites,
        stables,
        currentUserId
    };
};

export default connect(mapStateToProps)(MyFavorites);

