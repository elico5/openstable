import React from 'react';
import { RESERVATION_CONFIRMATION_FLAG, turnOnModal, LOGIN_FORM_FLAG } from '../../../actions/modal_actions';
import { getAMPM } from '../../../util/time/time';
import futureSlot from '../../../util/slots/future_slot';
import { connect } from 'react-redux';

const StableSlots = ({ slots, userId, turnOnConfirmationModal, turnOnLoginModal }) => {
    const initiateModal = slot => {
        if (userId) {
            turnOnConfirmationModal(slot);
        } else {
            turnOnLoginModal()
        }
    };
    if (!slots) {
        return null;
    } else if (slots.constructor === Object && Object.entries(slots).length === 0) {
        return (
            <div className='slot-buttons-container'>
                This stable has no availabilities around that time.
            </div>
        );
    } else {
        const slotButtons = Object.values(slots).filter(slot => futureSlot(slot)).sort((slot1, slot2) => {
            return slot1.time > slot2.time ? 1 : -1;
        }).map((slot, i) => {
            return <button key={i}
                className='slot-button'
                onClick={() => initiateModal(slot)}>{getAMPM(slot.time)}</button>;
        });
        return (
            <div className='slot-buttons-container'>
                {slotButtons}
            </div>
        );
    }
};

const mapStateToProps = ({ entities, session }, { stableId }) => {
    return {
        slots: entities.slots[stableId],
        userId: session.currentUserId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        turnOnConfirmationModal: info => dispatch(turnOnModal(RESERVATION_CONFIRMATION_FLAG, info)),
        turnOnLoginModal: () => dispatch(turnOnModal(LOGIN_FORM_FLAG))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StableSlots);