import * as StableAPI from '../util/stable_api';

export const RECEIVE_STABLE = 'RECEIVE_STABLE';

export const receiveStable = stable => {
    return {
        type: RECEIVE_STABLE,
        stable
    };
};

export const fetchStable = stableId => dispatch => {
    return StableAPI.fetchStable(stableId).then(
        stable => dispatch(receiveStable(stable))
    );
};