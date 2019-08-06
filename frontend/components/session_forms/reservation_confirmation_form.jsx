import React from 'react';
import { turnOffModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAMPM } from '../../util/reservation_form_params';

const ReservationConfirmationForm = ({stable, slot, turnOffModal}) => {
    const confirmReservation = () => {
        debugger
        turnOffModal();
    };
    return (
        <div className='reservation-confirmation-container'>
            <div className='reservation-image-container'>
                <img className='reservation-image' src={stable.pictureUrl} />
            </div>
            <div className='reservation-details-container'>
                <div className='reservation-stable-name'>{stable.name}</div>
                <div className='reservation-detail-line'>
                    <span>Location: </span>{stable.address}
                </div>
                <div className='reservation-detail-line'>
                    <span>Date: </span>{slot.date}
                </div>
                <div className='reservation-detail-line'>
                    <span>Check-In Time: </span>{getAMPM(slot.time)}
                </div>
                <div className='reservation-detail-line'>
                    <span>Party Size: </span>{slot.partySize} {slot.partySize > 1 ? 'horses' : 'horse'}
                </div>
                <button className='reservation-confirmation-button' onClick={confirmReservation}>Confirm Details</button>
            </div>
        </div>
    );
};

const mapStateToProps = ({ entities, session }, { info }) => {
    return {
        stable: entities.stables[info.stableId],
        slot: Object.assign({}, info, { userId: session.currentUserId })
    };
};

const mapDispatchToProps = dispatch => {
    return {
        turnOffModal: () => dispatch(turnOffModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationConfirmationForm);

