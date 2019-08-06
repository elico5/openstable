export const fetchStable = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/stables/${id}`
    });
};

export const fetchHomepageStables = id => {
    return $.ajax({
        method: 'GET',
        url: '/api/stables'
    });
};