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