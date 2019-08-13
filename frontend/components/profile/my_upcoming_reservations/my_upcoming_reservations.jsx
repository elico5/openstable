import React from 'react';
import UpcomingReservationItem from './upcoming_reservation_item';
import upcoming from '../../../util/reservations/upcoming';
import { connect } from 'react-redux';

const MyUpcomingReservations = ({ reservations, stables }) => {
    const upcomingReservationIds = Object.keys(reservations).filter(resId => upcoming(reservations[resId]));
    if (upcomingReservationIds.length > 0) {
        const upcomingReservationItems = upcomingReservationIds.sort((id1, id2) => {
            return reservations[id1].date > reservations[id2].date ? 1 : -1;
        }).map(id => {
            return <UpcomingReservationItem key={id}
                reservation={reservations[id]}
                stable={stables[reservations[id].stable_id]} />;
        });
        return (
            <div className='my-upcoming-reservations-container'>
                {upcomingReservationItems}
            </div>
        );
    } else {
        return (
            <div className='my-upcoming-reservations-container'>
                <div className='no-upcoming-reservations'>
                    Hey there partner. Looks like you don't have any upcoming reservations at this time!
                </div>
            </div>
        );
    }
};

const mapStateToProps = ({ entities }) => {
    const { reservations, stables } = entities;
    return {
        reservations,
        stables
    };
};

export default connect(mapStateToProps)(MyUpcomingReservations);

