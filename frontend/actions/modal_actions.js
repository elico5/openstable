export const LOGIN_FORM_FLAG = 'LOGIN_FORM';
export const SIGN_UP_FORM_FLAG = 'SIGN_UP_FORM';

export const TURN_ON_MODAL = 'TURN_ON_MODAL';
export const TURN_OFF_MODAL = 'TURN_OFF_MODAL';

export const turnOnModal = modal => {
    return {
        type: TURN_ON_MODAL,
        modal
    };
};

export const turnOffModal = () => {
    return {
        type: TURN_OFF_MODAL
    };
};