import React from 'react';
import { getAMPM } from '../time/time';
import regionIdToString from '../render/region_id_to_string';

export const generatePartySizes = () => {
    const options = [];
    for (let i = 1; i <= 20; i++) {
        const option = <option key={i} value={String(i)}>
            {i} {i > 1 ? 'horses' : 'horse'}
        </option>;
        options.push(option);
    }
    return options;
};

export const generateStablePartyOptions = (capacity) => {
    const options = [];
    for (let i = 1; i <= capacity; i++) {
        const option = <option key={i} value={String(i)}>
            {i} {i > 1? 'horses' : 'horse'}
        </option>;
        options.push(option);
    }
    return options;
}

export const getTodayStringDate = () => {
    const now = new Date();
    const YYYY = now.getFullYear();
    const MM = String(now.getMonth() + 1).padStart(2, '0');
    const DD = String(now.getDate()).padStart(2, '0');
    return [YYYY, MM, DD].join("-");
};

export const getNowStringTime = () => {
    const now = new Date();
    return String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
}

export const getOneMonthStringDate = (todayStringDate) => {
    let [YYYY, MM, DD] = todayStringDate.split('-').map(stringNumber => parseInt(stringNumber));
    if (MM === 11) {
        YYYY += 1;
        MM = 1;
    } else {
        MM += 1;
    }
    if (DD > 28) {
        DD -= 31 - 28;
    }
    [MM, DD] = [MM, DD].map(num => String(num).padStart(2, '0'));
    return [String(YYYY), MM, DD].join('-');
};

export const getTimeOptions = (todayStringDate, formStringDate) => {
    const times = [];
    let timeString;
    if (todayStringDate === formStringDate) {
        const now = new Date();
        timeString = [String(now.getHours() + 1).padStart(2, '0'), '00'];
    } else {
        timeString = ['04', '00'];
    }
    while (timeString.join(':') <= '23:30') {
        times.push(timeString.join(':'));
        if (timeString[1] === '30') {
            timeString[0] = String(parseInt(timeString[0]) + 1).padStart(2, '0');
            timeString[1] = '00';
        } else {
            timeString[1] = '30';
        }
    }
    return times.map((time, i) => {
        return <option key={i} value={time}>
            {getAMPM(time)}
        </option>;
    });
};

export const generateShowTimeOptions = (today, date, open_time, close_time) => {
    const times = [];
    if ("" === date) {
        return times;
    } else {
        let timeString;
        if (today === date) {
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
    return times.map((time, i) => {
        return <option key={i} value={time}>
            {getAMPM(time)}
        </option>;
    });
};

export const getRegionOptions = () => {
    return [0, 1, 2, 3, 4, 5].map(i => {
        return <option key={i} value={String(i)}>
            {regionIdToString(i)}
        </option>
    })
}

export const getHomeSearchDateAndTime = () => {
    let now = new Date();
    const currentTime = [String(now.getHours()).padStart(2, '0'), String(now.getMinutes()).padStart(2, '0')].join(':');
    let time;
    let date;
    if (currentTime > '19:00') {
        now = new Date(now.getTime() + 24 * 60 * 60 * 1000);
        const YYYY = now.getFullYear();
        const MM = String(now.getMonth() + 1).padStart(2, '0');
        const DD = String(now.getDate()).padStart(2, '0');
        date = [YYYY, MM, DD].join("-");
        time = '12:00';
    } else {
        time = [String(now.getHours() + 1).padStart(2, '0'), '30'].join(':');
        date = getTodayStringDate();
    }
    return { date, time };
};

export const getShowSearchDate = (close_time) => {
    const now = new Date();
    const currentTime = [String(now.getHours()).padStart(2, '0'), String(now.getMinutes()).padStart(2, '0')].join(':');
    const today = getTodayStringDate();
    if (currentTime < close_time.split('T')[1].slice(0, 5)) {
        return today;
    } else {
        const tomo = new Date(now.getTime() + 24 * 60 * 60 * 1000);
        const YYYY = tomo.getFullYear();
        const MM = String(tomo.getMonth() + 1).padStart(2, '0');
        const DD = String(tomo.getDate()).padStart(2, '0');
        return [YYYY, MM, DD].join("-");
    }
};