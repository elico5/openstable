import React from 'react';
import { connect } from 'react-redux';
import UserInfoForm from './user_info_form';
import PasswordChangeForm from './password_change_form';

const MyUserInformation = ({ user }) => {
    return (
        <div className='my-user-information-container'>
            <UserInfoForm
                email={user.email}
                firstName={user.first_name}
                lastName={user.last_name}
                phoneNumber={user.phone_number}
                ridingLocation={user.riding_location}
                currentUserId={user.id} />
            <PasswordChangeForm 
                currentUserId={user.id} />
        </div>
    );
};

const mapStateToProps = ({ entities, session }) => {
    const currentUserId = session.currentUserId;
    const { users } = entities;
    return {
        user: users[currentUserId]
    };
};

export default connect(mapStateToProps)(MyUserInformation);
