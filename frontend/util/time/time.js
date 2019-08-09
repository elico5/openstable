export const getAMPM = (HHMMString) => {
    let [hours, minutes] = HHMMString.split(':');
    hours = parseInt(hours);
    let flag;
    if (hours >= 12 && hours < 24) {
        if (hours !== 12) {
            hours -= 12;
        }
        flag = 'PM';
    } else {
        if (hours === 24) {
            hours -= 12;
        }
        flag = 'AM';
    }
    return [String(hours), minutes].join(':') + flag;
};

export const timeFix = timeString => {
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