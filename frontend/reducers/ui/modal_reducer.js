import { TURN_ON_MODAL, TURN_OFF_MODAL } from '../../actions/modal_actions';

export default (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case TURN_ON_MODAL:
            return action.modal;
        case TURN_OFF_MODAL:
            return null;
        default:
            return state;
    }
};