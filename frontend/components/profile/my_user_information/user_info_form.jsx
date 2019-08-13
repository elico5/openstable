import React from 'react';

export default ({ email, firstName, lastName, phoneNumber, ridingLocation }) => {
    return (
        <>
            <span className='user-info-form-heading'>Profile</span>
            <span className='user-info-link-text'>Privacy Policy</span>
            <div className='first-last-form-container'>
                <div className='user-info-first'>
                    <div className='user-info-form-label'>FIRST NAME</div>
                    <input type='text'></input>
                </div>
                <div className='user-info-last'>
                    <div className='user-info-form-label'>LAST NAME</div>
                    <input type='text'></input>
                </div>
            </div>
            <div className='user-info-other-container'>
                <div className='user-info-form-label'>EMAIL</div>
                <input type='text'></input>
            </div>
            <div className='user-info-other-container'>
                <div className='user-info-form-label'>PHONE</div>
                <input type='text'></input>
            </div>
            <div className='user-info-other-container'>
                <div className='user-info-form-label'>PRIMARY RIDING LOCATION</div>
                <select></select>
            </div>
            <button className='user-info-form-submit'>Save Changes</button>
            <div className='user-info-form-hr'></div>
        </>
    );
};