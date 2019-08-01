export const fetchStable = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/stables/${id}`
    });
};