import { combineReducers } from 'redux';
import usersReducers from './users_reducer';
import stablesReducer from './stables_reducer';
import reservationsReducer from './reservations_reducer';
import reviewsReducer from './reviews_reducer';
import slotsReducer from './slots_reducer';
import favoritesReducer from './favorites_reducer';

export default combineReducers({
    users: usersReducers,
    stables: stablesReducer,
    reservations: reservationsReducer,
    reviews: reviewsReducer,
    slots: slotsReducer,
    favorites: favoritesReducer
});