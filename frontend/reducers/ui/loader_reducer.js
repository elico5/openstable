import { TURN_ON_LOADER, TURN_OFF_LOADER } from '../../actions/loader_actions';

export default (state = false, action) => {
    Object.freeze(state);
    switch (action.type) {
        case TURN_ON_LOADER:
            return true;
        case TURN_OFF_LOADER:
            return false;
        default:
            return state;
    }
};