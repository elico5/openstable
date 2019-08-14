import * as StableAPI from '../util/api/stable_api';

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

export const fetchStable = (stableId, currentUserId) => dispatch => {
    return StableAPI.fetchStable(stableId, currentUserId).then(
        payload => dispatch(receiveStable(payload))
    );
};

export const fetchHomepageStables = regionId => dispatch => {
    return StableAPI.fetchHomepageStables(regionId).then(
        stables => dispatch(receiveStables(stables))
    );
};