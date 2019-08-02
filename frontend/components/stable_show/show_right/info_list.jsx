import React from 'react';
import timeFix from '../../../util/time_fix';

export default ({ phone_number, open_time, close_time, groomName }) => {
    open_time = timeFix(open_time);
    close = timeFix(close_time);
    return (
        <div className='info-list-container'>
            <div className='info-list-item'>
                <i className='fas fa-clock'></i>
                <div className='info-item-content'>
                    <p className='info-item-header'>Hours of operation</p>
                    <p>{open_time} - {close},  7 days a week</p>
                </div>
            </div>
            <div className='info-list-item'>
                <i className='fas fa-phone-square-alt'></i>
                <div className='info-item-content'>
                    <p className='info-item-header'>Phone number</p>
                    <p>{phone_number}</p>
                </div>
            </div>
            <div className='info-list-item'>
                <i className='fas fa-user-circle'></i>
                <div className='info-item-content'>
                    <p className='info-item-header'>Groom</p>
                    <p>{groomName}</p>
                </div>
            </div>
        </div>
    );
};