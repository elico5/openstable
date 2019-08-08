import { getTodayStringDate } from './generate_form_params';

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