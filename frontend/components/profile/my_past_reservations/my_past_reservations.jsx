import React from 'react';
import PastReservationItem from './past_reservation_item';
import upcoming from '../../../util/reservations/upcoming';
import { connect } from 'react-redux';

const MyPastReservations = ({ reservations, stables }) => {
    const pastReservationIds = Object.keys(reservations).filter(resId => !upcoming(reservations[resId]));
    if (pastReservationIds.length > 0) {
        const pastReservationItems = pastReservationIds.sort((id1, id2) => {
            return reservations[id1].date > reservations[id2].date ? 1 : -1;
        }).map(id => {
            return <PastReservationItem key={id}
                reservation={reservations[id]}
                stable={stables[reservations[id].stable_id]} />;
        });
        return (
            <div className='my-past-reservations-container'>
                {pastReservationItems}
            </div>
        );
    } else {
        return (
            <div className='my-past-reservations-container'>
                <div className='no-past-reservations'>
                    Hey there partner. Looks like you haven't made a reservation yet!
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ entities }) => {
    const { reservations, stables } = entities;
    return {
        reservations,
        stables
    };
};

export default connect(mapStateToProps)(MyPastReservations);
