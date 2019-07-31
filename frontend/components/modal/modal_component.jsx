import React from 'react';
import { connect } from 'react-redux';
import { LOGIN_FORM_FLAG, SIGN_UP_FORM_FLAG, turnOffModal } from '../../actions/modal_actions';
import LoginForm from '../session_forms/login_form';
import SignUpForm from '../session_forms/sign_up_form';

const Modal = ({ modal_type, turnOffModal }) => {
    if (!modal_type) return null;
    let modal_component;
    switch (modal_type) {
        case LOGIN_FORM_FLAG:
            modal_component = <LoginForm />;
            break;
        case SIGN_UP_FORM_FLAG:
            modal_component = <SignUpForm />;
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

const mapStateToProps = state => {
    return {
        modal_type: state.ui.modal
    }
};

const mapDispatchToProps = dispatch => {
    return {
        turnOffModal: () => dispatch(turnOffModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);