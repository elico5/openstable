export const TURN_ON_MODAL = 'TURN_ON_MODAL';
export const TURN_OFF_MODAL = 'TURN_OFF_MODAL';

export const turnOnModal = modal_type => {
    return {
        type: TURN_ON_MODAL,
        modal_type
    };
};

export const turnOffModal = () => {
    return {
        type: TURN_OFF_MODAL
    };
};