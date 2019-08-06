import { TURN_ON_MODAL, TURN_OFF_MODAL } from '../../actions/modal_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case TURN_ON_MODAL:
            return {type: action.modal, info: action.info};
        case TURN_OFF_MODAL:
            return {};
        default:
            return {};
    }
};