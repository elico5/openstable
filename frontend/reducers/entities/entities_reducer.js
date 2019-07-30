import { combineReducers } from 'redux';
import usersReducers from './users_reducer';
import stablesReducer from './stables_reducer';
import reservationsReducer from './reservations_reducer';
import reviewsReducer from './reviews_reducer';

export default combineReducers({
    users: usersReducers,
    stables: stablesReducer,
    reservations: reservationsReducer,
    reviews: reviewsReducer
});