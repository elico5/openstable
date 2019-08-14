export default slot => {
    const { date, time } = slot;
    return new Date() < new Date(date + 'T' + time);
}