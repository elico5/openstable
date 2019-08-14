import React from 'react';
import { connect } from 'react-redux';
import { LOGIN_FORM_FLAG, SIGN_UP_FORM_FLAG, RESERVATION_CONFIRMATION_FLAG, REGION_CHANGE_FLAG, REVIEW_FORM_FLAG, turnOffModal } from '../../actions/modal_actions';
import LoginForm from '../modal_forms/login_form';
import SignUpForm from '../modal_forms/sign_up_form';
import ReservationConfirmationForm from '../modal_forms/reservation_confirmation_form';
import RegionChangeForm from '../modal_forms/region_change_form';
import ReviewForm from '../modal_forms/review_form';

const Modal = ({ modal, turnOffModal }) => {
    if (modal.constructor === Object && Object.entries(modal).length === 0) return null;
    let modal_component;
    switch (modal.type) {
        case LOGIN_FORM_FLAG:
            modal_component = <LoginForm />;
            break;
        case SIGN_UP_FORM_FLAG:
            modal_component = <SignUpForm />;
            break;
        case RESERVATION_CONFIRMATION_FLAG:
            modal_component = <ReservationConfirmationForm info={modal.info} />;
            break;
        case REGION_CHANGE_FLAG:
            modal_component = <RegionChangeForm />;
            break;
        case REVIEW_FORM_FLAG:
            modal_component = <ReviewForm info={modal.info} />;
            break;
        default:
            return null;
    }
    return (
        <div className='modal-background' onClick={turnOffModal}>
            <div className='modal-close'>{String.fromCharCode(10005)}</div>
            <div className='modal-foreground' onClick={e => e.stopPropagation()}>
                { modal_component }
            </div>
        </div>
    );
};

const mapStateToProps = ({ ui }) => {
    return {
        modal: ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        turnOffModal: () => dispatch(turnOffModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);