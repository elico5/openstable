import React from 'react';
import { getAMPM } from '../time/time';
import regionIdToString from '../region_id_to_string';

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

export const getTodayStringDate = () => {
    const now = new Date();
    const YYYY = now.getFullYear();
    const MM = String(now.getMonth() + 1).padStart(2, '0');
    const DD = String(now.getDate()).padStart(2, '0');
    return [YYYY, MM, DD].join("-");
};

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

export const getRegionOptions = () => {
    return [0, 1, 2, 3, 4, 5].map(i => {
        return <option key={i} value={String(i)}>
            {regionIdToString(i)}
        </option>
    })
}