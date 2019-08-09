export const favoriteStable = (stableId, userId) => {
    return $.ajax({
        method: 'POST',
        url: `/api/stables/${stableId}/favorites`,
        data: {
            favoriteParams: {
                userId
            }
        }
    });
};

export const unfavoriteStable = (stableId, userId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/stables/${stableId}/favorites/${userId}`,
        data: {
            favoriteParams: {
                userId
            }
        }
    });
};