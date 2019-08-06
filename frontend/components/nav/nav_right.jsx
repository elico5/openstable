import React from 'react';
import { connect } from 'react-redux';
import { LOGIN_FORM_FLAG, SIGN_UP_FORM_FLAG, turnOnModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

const NavRight = ({user, currentUserId, turnOnModal, logout}) => {
    if (currentUserId) {
        const toggleDropdown = () => {
            const dropdownElement = document.getElementById('user-dropdown');
            dropdownElement.style.display = dropdownElement.style.display === '' ?
                'block' : '';
        };
        return (
            <div className='logged-in-nav-right'>
                <div>
                    <i className='fas fa-calendar-alt'></i>
                </div>
                <div className='dropdown-container' onClick={toggleDropdown}>
                    <div className='toggle-dropdown'>
                        Hi, {user.first_name} <i className='fas fa-chevron-down'></i>
                    </div>
                    <div id='user-dropdown'>
                        <div onClick={logout}>Sign Out</div>
                    </div>
                </div>
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

const mapStateToProps = ({ entities, session }) => {
    return {
        user: entities.users[session.currentUserId],
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