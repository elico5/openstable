import { LOGIN_USER, LOGOUT_USER, CHANGE_SESSION_REGION } from '../../actions/session_actions';

const nullState = { currentUserId: null, region: 1 };

export default (state = nullState, action) => {
    Object.freeze(state);
    switch(action.type) {
        case LOGIN_USER:
            return { 
                currentUserId: action.payload.user.id,
                region: action.payload.user.riding_location
            };
        case LOGOUT_USER:
            return nullState;
        case CHANGE_SESSION_REGION:
            return Object.assign({}, state, { region: action.region });
        default:
            return state;
    }
};