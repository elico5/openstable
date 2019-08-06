import * as StableAPI from '../util/stable_api';

export const RECEIVE_STABLE = 'RECEIVE_STABLE';
export const RECEIVE_STABLES = 'RECEIVE_STABLES';

export const receiveStable = payload => {
    return {
        type: RECEIVE_STABLE,
        payload
    };
};

export const receiveStables = stables => {
    return {
        type: RECEIVE_STABLES,
        stables
    };
};

export const fetchStable = stableId => dispatch => {
    return StableAPI.fetchStable(stableId).then(
        payload => dispatch(receiveStable(payload))
    );
};

export const fetchHomepageStables = () => dispatch => {
    return StableAPI.fetchHomepageStables().then(
        stables => dispatch(receiveStables(stables))
    );
};