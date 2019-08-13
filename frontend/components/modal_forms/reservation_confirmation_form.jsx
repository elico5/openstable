import React from 'react';
import { turnOffModal } from '../../actions/modal_actions';
import { createReservation } from '../../actions/reservation_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAMPM } from '../../util/time/time';

const ReservationConfirmationForm = ({ stable, slot, turnOffModal, error, history, createReservation }) => {
    const redirect = () => {
        turnOffModal();
        history.push('/my/profile/upcoming-reservations');
    };
    const confirmReservation = () => {
        const { stableId, userId, date, time, partySize } = slot;
        createReservation(stableId, userId, date, time, partySize).then(
            () => redirect()
        )
    };
    return (
        <div className='reservation-confirmation-container'>
            <div className='reservation-image-container'>
                <img className='reservation-image' src={stable.pictureUrl}></img>
            </div>
            <div className='reservation-details-container'>
                <div className='reservation-stable-name'>{stable.name}</div>
                <div className='reservation-detail-line'>
                    <span className='icon'><i className='fas fa-map-marker-alt' /></span>
                    <span>Location: </span>{stable.address}
                </div>
                <div className='reservation-detail-line'>
                    <span className='icon'><i className='fas fa-calendar-alt' /></span>
                    <span>Date: </span>{slot.date}
                </div>
                <div className='reservation-detail-line'>
                    <span className='icon'><i className='fas fa-clock' /></span>
                    <span>Check-In Time: </span>{getAMPM(slot.time)}
                </div>
                <div className='reservation-detail-line'>
                    <span className='icon'><i className='fas fa-horse' /></span>
                    <span>Party Size: </span>{slot.partySize} {slot.partySize > 1 ? 'horses' : 'horse'}
                </div>
                <button className='reservation-confirmation-button' onClick={confirmReservation}>Confirm Reservation</button>
                <div className='reservation-error'>{error}</div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ entities, session, errors }, { info }) => {
    return {
        stable: entities.stables[info.stableId],
        slot: Object.assign({}, info, { userId: session.currentUserId }),
        error: errors.reservations[0]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        turnOffModal: () => dispatch(turnOffModal()),
        createReservation: (stableId, userId, date, time, partySize) => dispatch(createReservation(stableId, userId, date, time, partySize))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReservationConfirmationForm));

