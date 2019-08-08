export const TURN_ON_LOADER = 'TURN_ON_LOADER';
export const TURN_OFF_LOADER = 'TURN_OFF_LOADER';

export const turnOnLoader = () => {
    return {
        type: TURN_ON_LOADER
    };
};

export const turnOffLoader = () => {
    return {
        type: TURN_OFF_LOADER
    };
};