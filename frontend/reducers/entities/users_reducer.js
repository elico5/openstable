import { LOGIN_USER } from '../../actions/session_actions';
import { RECEIVE_STABLE } from '../../actions/stable_actions';
import { RECEIVE_FAVORITE, RECEIVE_UNFAVORITE } from '../../actions/favorite_actions';
import { merge } from 'lodash';
import { RECEIVE_CREATED_RESERVATION } from '../../actions/reservation_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newUserState;
    let newArray;
    let newState;
    let stableReservationIds;
    switch (action.type) {
        case LOGIN_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_STABLE:
            return Object.assign({}, state, action.payload.users);
        case RECEIVE_CREATED_RESERVATION:
            newUserState = merge({}, state[action.reservation.user_id]);
            stableReservationIds = newUserState.reviewableStables[action.reservation.stable_id];
            if (!stableReservationIds) {
                stableReservationIds = [];
            }
            stableReservationIds.push(action.reservation.id);
            newUserState.reviewableStables[action.reservation.stable_id] = stableReservationIds;
            return merge({}, state, { [action.reservation.user_id]: newUserState });
        case RECEIVE_FAVORITE:
            newUserState = merge({}, state[action.favorite.user_id]);
            newArray = state[action.favorite.user_id].favoritedStableIds.slice();
            newArray.push(action.favorite.stable_id);
            newUserState.favoritedStableIds = newArray;
            return merge({}, state, { [action.favorite.user_id]: newUserState });
        case RECEIVE_UNFAVORITE:
            newUserState = merge({}, state[action.unfavorite.user_id]);
            newArray = state[action.unfavorite.user_id].favoritedStableIds.slice();
            const i = newArray.indexOf(action.unfavorite.stable_id);
            newArray.splice(i, 1);
            newUserState.favoritedStableIds = newArray;
            newState = Object.assign({}, state);
            delete newState[action.unfavorite.user_id];
            return merge({}, newState, { [action.unfavorite.user_id]: newUserState });
        default:
            return state;
    }
};