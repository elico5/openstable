export default (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        default:
            return state;
    }
};