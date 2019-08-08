export const getQueryStringParameters = path => {
    const queryString = path.slice(8);
    const [region, date, time, partySize] = queryString.split('+').map(portion => {
        return portion.split('=')[1];
    });
    return {
        region,
        date,
        time,
        partySize
    };
};

export const getSearchPathFromState = state => {
    const {region, date, time, partySize} = state;
    return `/search/region=${region}+date=${date}+time=${time}+partysize=${partySize}`;
}