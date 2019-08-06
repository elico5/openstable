import React from 'react';
import { RESERVATION_CONFIRMATION_FLAG, turnOnModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';

const StableSlots = ({ slots, turnOnConfirmationModal }) => {
    if (!slots) {
        return null;
    } else if (slots.constructor === Object && Object.entries(slots).length === 0) {
        return (
            <div className='slot-buttons-container'>
                This stable has no availabilities around that time.
            </div>
        );
    } else {
        const slotButtons = Object.values(slots).sort((slot1, slot2) => {
            return slot1.time > slot2.time ? 1 : -1
        }).map((slot, i) => {
            return <button key={i}
                className='slot-button'
                onClick={() => turnOnConfirmationModal(slot)}>{slot.time}</button>;
        });
        return (
            <div className='slot-buttons-container'>
                {slotButtons}
            </div>
        );
    }
};

const mapStateToProps = ({ entities }, { stableId }) => {
    debugger
    return {
        slots: entities.slots[stableId]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        turnOnConfirmationModal: info => dispatch(turnOnModal(RESERVATION_CONFIRMATION_FLAG, info))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StableSlots);