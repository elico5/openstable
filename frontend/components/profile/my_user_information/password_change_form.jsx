import React from 'react';

export default () => {
    return (
        <>
            <span className='user-info-form-heading'>Change Password</span>
            <div className='password-explanation'>Please choose a password that is at least 6 characters long (optional).</div>
            <div className='user-info-other-container'>
                <div className='user-info-form-label'>NEW PASSWORD</div>
                <input type='password'></input>
            </div>
            <div className='user-info-other-container'>
                <div className='user-info-form-label'>CONFIRM NEW PASSWORD</div>
                <input type='password'></input>
            </div>
            <button className='user-info-form-submit'>Change Password</button>
        </>
    )
};