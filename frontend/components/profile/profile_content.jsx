import React from 'react';

export default () => {
    return (
        <div className='profile-content-outer-container'>
            <div className='profile-content-inner-container'>
                <div className='tab-nav-bar'>
                    <div className='tab-nav-tab'>
                        My User Information
                    </div>
                    <div className='tab-nav-tab'>
                        My Upcoming Reservations
                    </div>
                    <div className='tab-nav-tab'>
                        My Past Reservations
                    </div>
                    <div className='tab-nav-tab'>
                        My Reviews
                    </div>
                    <div className='tab-nav-tab'>
                        My Favorites
                    </div>
                </div>
                <div id='information'>

                </div>
                <div id='upcoming-reservations'>

                </div>
                <div id='past-reservations'>

                </div>
                <div id='reviews'>

                </div>
                <div id='favorites'>

                </div>
            </div>
        </div>
    );
};