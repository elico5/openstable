import React from 'react';
import { getAMPM } from '../../../util/time/time';
import pastReservationType from '../../../util/reservations/past_reservation_type';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const PastReservationItem = ({ reservation, stable, history }) => {
    const redirectToStableShow = () => {
        history.push(`/stables/${stable.id}`);
    };
    const redirectToReviews = () => {
        history.push('/my/profile/reviews');
    }
    const flexElementSelection = flag => {
        switch (flag) {
            case 'cancelled':
                return <button className='cancelled-reservation-button'>
                    <i className='fas fa-window-close'></i> Cancelled
                </button>;
            case 'reviewed':
                return <button onClick={redirectToReviews} className='reviewed-reservation-button'>
                    <i className='fas fa-check-circle'></i> Reviewed
                </button>;
            case 'reviewable':
                return <button className='reviewable-reservation-button'>
                    Write a Review
                </button>;
            case 'unreviewable':
                return <button className='unreviewable-reservation-button'>
                    Review After Stay
                </button>;
        }
    };
    const flexElement = flexElementSelection(pastReservationType(reservation, stable.duration));
    return (
        <div className='past-reservation-item-container'>
            <div onClick={redirectToStableShow} className='past-reservation-image-container'>
                <img className='past-reservation-stable-image' src={stable.pictureUrl}></img>
            </div>
            <div className='past-reservation-info-container'>
                <div onClick={redirectToStableShow} className='past-reservation-stable-name'>
                    {stable.name}
                </div>
                <div className='past-reservation-date-time'>
                    <i className='fas fa-clock'></i> {reservation.date} at {getAMPM(reservation.time.slice(11, 16))}
                </div>
                <div className='past-reservation-location'>
                    <i className='fas fa-map-marker-alt'></i> {stable.city}, {stable.state}
                </div>
                <div className='past-reservation-size'>
                    <i className='fas fa-horse'></i> Space for {reservation.party_size} {reservation.party_size > 1 ? 'horses' : 'horse'}
                </div>
            </div>
            <div className='flex-right-container'>
                {flexElement}
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default withRouter(connect(null, mapDispatchToProps)(PastReservationItem));