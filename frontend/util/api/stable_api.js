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

export const fetchHomepageStables = id => {
    return $.ajax({
        method: 'GET',
        url: '/api/stables'
    });
};