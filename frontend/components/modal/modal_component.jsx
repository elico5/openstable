import React from 'react';
import { connect } from 'react-redux';
import { turnOffModal } from '../../actions/modal_actions';
import LoginForm from '../session_forms/login_form';
import SignUpForm from '../session_forms/signup_form';

const Modal = ({ modal_type, turnOffModal }) => {
    if (!modal_type) return null;
    let modal_component;
    switch (modal_type) {
        case 'Login Form':
            modal_component = <LoginForm />;
            break;
        case 'Sign Up Form':
            modal_component = <SignUpForm />;
            break;
        default:
            return null;
    }
    return (
        <div className='modal-background' onClick={turnOffModal}>
            <div className='modal-foreground' onClick={e => e.stopPropagation()}>
                { modal_component }
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    }
};

const mapDispatchToProps = dispatch => {
    return {
        turnOffModal: () => dispatch(turnOffModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);