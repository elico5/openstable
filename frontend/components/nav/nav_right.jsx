import React from 'react';
import { connect } from 'react-redux';
import { LOGIN_FORM_FLAG, SIGN_UP_FORM_FLAG, turnOnModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const NavRight = ({ user, currentUserId, turnOnModal, logout, history }) => {
    if (currentUserId) {
        const toggleDropdown = () => {
            const dropdownElement = document.getElementById('user-dropdown');
            dropdownElement.style.display = dropdownElement.style.display === '' ?
                'block' : '';
        };
        const redirectToUpcoming = () => {
            history.push('/my/profile/upcoming-reservations');
        };
        return (
            <div className='logged-in-nav-right'>
                <div>
                    <i onClick={redirectToUpcoming} className='fas fa-calendar-alt'></i>
                </div>
                <div className='dropdown-container' onClick={toggleDropdown}>
                    <div className='toggle-dropdown'>
                        Hi, {user.first_name} <i className='fas fa-chevron-down'></i>
                    </div>
                    <div id='user-dropdown'>
                        <div onClick={() => history.push('/my/profile')}>My Profile</div>
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

const mapStateToProps = ({ entities, session }, { history }) => {
    return {
        user: entities.users[session.currentUserId],
        currentUserId: session.currentUserId,
        history
    };
};

const mapDispatchToProps = dispatch => {
    return {
        turnOnModal: flag => dispatch(turnOnModal(flag)),
        logout: () => dispatch(logout())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavRight));