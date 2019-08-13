import { RECEIVE_FAVORITE, RECEIVE_UNFAVORITE } from '../../actions/favorite_actions';
import { LOGIN_USER } from '../../actions/session_actions';
import { GET_USER_INFO } from '../../actions/user_actions';

export default (state = [], action) => {
    Object.freeze(state);
    let newArray;
    switch (action.type) {
        case RECEIVE_FAVORITE:
            newArray = state.slice();
            newArray.push(action.favorite.stable_id);
            return newArray;
        case RECEIVE_UNFAVORITE:
            newArray = state.slice();
            const i = newArray.indexOf(action.unfavorite.stable_id);
            newArray.splice(i, 1);
            return newArray;
        case LOGIN_USER:
            return action.payload.favorites;
        case GET_USER_INFO:
            return action.payload.favorites;
        default:
            return state;
    }
};