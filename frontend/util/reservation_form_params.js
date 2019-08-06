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

export const getTimes = (today, date, open_time, close_time) => {
    const times = [];
    if ("" === date) {
        return times;
    } else {
        let timeString;
        if ( today === date) {
            const now = new Date();
            timeString = [String(now.getHours() + 1).padStart(2, '0'), '00'];
        } else {
            timeString = open_time.split('T')[1].slice(0, 5).split(':');
        }
        let time = '2000-01-01T' + timeString.join(':') + ':00.000Z';
        while (time <= close_time) {
            if (time >= open_time) {
                times.push(timeString.join(':'));
            }
            if (timeString[1] === '30') {
                timeString[0] = String(parseInt(timeString[0]) + 1).padStart(2, '0');
                timeString[1] = '00';
            } else {
                timeString[1] = String(parseInt(timeString[1]) + 30);
            }
            time = '2000-01-01T' + timeString.join(':') + ':00.000Z';
        }
    }
    return times;
};

export const getPartySizes = (capacity) => {
    const sizes = [];
    for (let i = 1; i <= capacity; i++) {
        sizes.push(i)
    }
    return sizes;
}