export const selectStable = ({ reviews, stables, users }, stableId) => {
    if (stables[stableId] && stables[stableId].groomName) {
        const stable = stables[stableId];
        const stableReviews = {};
        stable.reviewIds.forEach(reviewId => {
            stableReviews[reviewId] = reviews[reviewId];
        })
        const stableUsers = {};
        Object.values(stableReviews).forEach(review => {
            stableUsers[review.userId] = users[review.userId];
        })
        return { stable, stableReviews, stableUsers};
    } else if (stables[stableId]) {
        const stable = stables[stableId];
        return { stable };
    } else {
        return {};
    }
};