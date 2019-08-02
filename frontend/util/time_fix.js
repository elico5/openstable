export default timeString => {
    let hourNumber = parseInt(timeString.slice(-13, -11));
    const minute = timeString.slice(-11, -8);
    let timeFlag;
    if (hourNumber > 11) {
        hourNumber -= 12;
        if (hourNumber === 24) {
            timeFlag = 'AM';
        } else {
            timeFlag = 'PM';
        }
    } else {
        timeFlag = 'AM';
    }
    return hourNumber.toString() + minute + timeFlag;
};