import React from 'react';
import { turnOnLoader, turnOffLoader } from '../../../actions/loader_actions';
import { cancelReservation } from '../../../actions/reservation_actions';
import { getAMPM } from '../../../util/time/time';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const UpcomingReservationItem = ({ reservation, stable, history, turnOnLoader, turnOffLoader, cancelReservation }) => {
    const redirectToStableShow = () => {
        history.push(`/stables/${stable.id}`);
    };
    const cancel = () => {
        turnOnLoader();
        cancelReservation(reservation.id).then(
            () => turnOffLoader()
        );
    };
    return (
        <div className='upcoming-reservation-item-container'>
            <div onClick={redirectToStableShow} className='upcoming-reservation-image-container'>
                <img className='upcoming-reservation-stable-image' src={stable.pictureUrl}></img>
            </div>
            <div className='upcoming-reservation-info-container'>
                <div onClick={redirectToStableShow} className='upcoming-reservation-stable-name'>
                    {stable.name}
                </div>
                <div className='upcoming-reservation-date-time'>
                    <i className='fas fa-clock'></i> {reservation.date} at {getAMPM(reservation.time.slice(11, 16))} for {stable.duration} hours
                </div>
                <div className='upcoming-reservation-location'>
                    <i className='fas fa-map-marker-alt'></i> {stable.city}, {stable.state}
                </div>
                <div className='upcoming-reservation-size'>
                    <i className='fas fa-horse'></i> Space for {reservation.party_size} {reservation.party_size > 1 ? 'horses' : 'horse'}
                </div>
            </div>
            <div className='upcoming-reservation-button-container'>
                <button onClick={cancel} className='cancel-reservation-button'>
                    Cancel Reservation
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        turnOnLoader: () => dispatch(turnOnLoader()),
        turnOffLoader: () => dispatch(turnOffLoader()),
        cancelReservation: resId => dispatch(cancelReservation(resId))
    };
};

export default withRouter(connect(null, mapDispatchToProps)(UpcomingReservationItem));