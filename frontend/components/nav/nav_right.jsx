import React from 'react';
import { connect } from 'react-redux';
import { LOGIN_FORM_FLAG, SIGN_UP_FORM_FLAG, turnOnModal } from '../../actions/modal_actions';

const NavRight = ({currentUserId, turnOnModal}) => {
    if (currentUserId) {
        return (
            <div>
                PLACEHOLDER TEXT
            </div>
        );
    } else {
        return (
            <div>
                <button onClick={() => turnOnModal(SIGN_UP_FORM_FLAG)}>Sign Up</button>
                <button onClick={() => turnOnModal(LOGIN_FORM_FLAG)}>Sign In</button>
            </div>
        );
    }
};

const mapStateToProps = ({ session }) => {
    return {
        currentUserId: session.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        turnOnModal: flag => dispatch(turnOnModal(flag))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavRight);