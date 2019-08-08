export const fetchStableSlots = (stableId, date, time, party_size) => {
    return $.ajax({
        method: 'GET',
        url: `/api/stables/${stableId}/slots`,
        data: {
            query: {
                date,
                party_size,
                time
            }
        }
    });
};

export const fetchStablesAndSlots = (regionId, date, time, party_size) => {
    return $.ajax({
        method: 'GET',
        url: `/api/regions/${regionId}/slots`,
        data: {
            query: {
                date,
                party_size,
                time
            }
        }
    });
};