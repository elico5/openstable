// Eventually grab reviews for stable, users for reviews...
export const selectStable = ({users, stables, reviews}, stableId) => {
    if (stables[stableId]) {
        return stables[stableId];
    } else {
        return {};
    }
}