const regions = {
    1: 'the Northeastern United States',
    2: 'the Southeastern United States',
    3: 'the Midwestern United States',
    4: 'the Southwestern United States',
    5: 'the Western United States',
    0: 'Other'
};

export default locationId => {
    return regions[locationId];
};