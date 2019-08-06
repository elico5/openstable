export default price => {
    let priceCategory;
    if (price <= 3) {
        priceCategory = '$';
    } else if (price <= 6) {
        priceCategory = '$$';
    } else if (price <= 9) {
        priceCategory = '$$$';
    } else {
        priceCategory = '$$$$';
    }
    return priceCategory;
};