export const fetchStable = (id, currentUserId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/stables/${id}`,
        data: {
            user: {
                currentUserId
            }
        }
    });
};

export const fetchHomepageStables = regionId => {
    return $.ajax({
        method: 'GET',
        url: '/api/stables',
        data: {
            region: {
                regionId
            }
        }
    });
};

export const fetchRegionStableCounts = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/regions'
    });
};