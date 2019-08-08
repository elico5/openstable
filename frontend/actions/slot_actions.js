import * as SlotAPI from '../util/slot_api';

export const RECEIVE_SLOTS = 'RECEIVE_SLOTS';
export const RECEIVE_STABLES_AND_SLOTS = 'RECEIVE_STABLES_AND_SLOTS';
export const CLEAR_SLOTS = 'CLEAR_SLOTS';

export const receiveSlots = slots => {
    return {
        type: RECEIVE_SLOTS,
        slots
    };
};

export const receiveStablesAndSlots = payload => {
    return {
        type: RECEIVE_STABLES_AND_SLOTS,
        payload
    };
};

export const fetchStableSlots = (stableId, date, time, party_size) => dispatch => {
    return SlotAPI.fetchStableSlots(stableId, date, time, party_size).then(
        slots => dispatch(receiveSlots(slots))
    );
};

export const fetchStablesAndSlots = (regionId, date, time, party_size) => dispatch => {
    return SlotAPI.fetchStablesAndSlots(regionId, date, time, party_size).then(
        payload => dispatch(receiveStablesAndSlots(payload))
    );
};

export const clearSlots = () => dispatch => {
    return dispatch({
        type: CLEAR_SLOTS
    });
};