import * as SlotAPI from '../util/slot_api';

export const RECEIVE_SLOTS = 'RECEIVE_SLOTS';
export const CLEAR_SLOTS = 'CLEAR_SLOTS';

export const receiveSlots = slots => {
    return {
        type: RECEIVE_SLOTS,
        slots
    };
};

export const fetchStableSlots = (stableId, date, time, party_size) => dispatch => {
    return SlotAPI.fetchStableSlots(stableId, date, time, party_size).then(
        slots => dispatch(receiveSlots(slots))
    );
};

export const clearSlots = () => dispatch => {
    return dispatch({
        type: CLEAR_SLOTS
    });
};