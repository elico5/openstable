export default (reservation, duration) => {
    if (reservation.cancelled) {
        return 'cancelled';
    } else if (reservation.reviewed) {
        return 'reviewed';
    }
    const now = new Date();
    let { date, time } = reservation;
    const reservationEndTime = new Date(new Date(date + time.slice(10)).getTime() + (4 + duration) * 60 * 60 * 1000);
    return now > reservationEndTime ? 'reviewable' : 'unreviewable';
}