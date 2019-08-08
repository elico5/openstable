import React from 'react';
import { getAMPM } from '../../util/time/time';
import regionIdToString from '../../util/region_id_to_string';

export default ({ region, date, time, partySize }) => {
    return (
        <div className='search-detail-inner-container'>
            <div className='search-detail-header'>
                Search Details
            </div>
            <div className='search-detail-details'>
                <div className='search-detail-detail'>
                    <span className='icon'><i className='fas fa-globe-americas' /></span>
                    <span className='search-detail-type'>Region:</span>
                    <span className='detail-value'>{regionIdToString(region)}</span>
                </div>
                <div className='search-detail-detail'>
                    <span className='icon'><i className='fas fa-calendar-alt' /></span>
                    <span className='search-detail-type'>Date:</span>
                    <span className='detail-value'>{date}</span>
                </div>
                <div className='search-detail-detail'>
                    <span className='icon'><i className='fas fa-clock' /></span>
                    <span className='search-detail-type'>Time:</span>
                    <span className='detail-value'>{getAMPM(time)}</span>
                </div>
                <div className='search-detail-detail'>
                    <span className='icon'><i className='fas fa-horse' /></span>
                    <span className='search-detail-type'>Party Size:</span>
                    <span className='detail-value'>{partySize} {partySize > 1 ? 'horses' : 'horse'}</span>
                </div>
            </div>
        </div>
    );
};