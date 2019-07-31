import React from 'react';
import { connect } from 'react-redux';
import { LOGIN_FORM_FLAG, SIGN_UP_FORM_FLAG, turnOnModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

const NavRight = ({currentUserId, turnOnModal, logout}) => {
    if (currentUserId) {
        return (
            <div className='session-button-container'>
                <button className='log-out'
                    onClick={logout}>Log out</button>
            </div>
        );
    } else {
        return (
            <div className='session-button-container'>
                <button className='sign-up'
                    onClick={() => turnOnModal(SIGN_UP_FORM_FLAG)}>Sign up</button>
                <button className='sign-in'
                    onClick={() => turnOnModal(LOGIN_FORM_FLAG)}>Sign in</button>
            </div>
        );
    }
};

const mapStateToProps = ({ session }) => {
    return {
        currentUserId: session.currentUserId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        turnOnModal: flag => dispatch(turnOnModal(flag)),
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavRight);