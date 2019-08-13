export default reservation => {
    if (reservation.cancelled) {
        return false;
    }
    const now = new Date();
    let { date, time } = reservation;
    const reservationTime = new Date(new Date(date + time.slice(10)).getTime() + 4 * 60 * 60 * 1000);
    return now > reservationTime ? false : true;
};