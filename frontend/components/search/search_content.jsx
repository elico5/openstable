import React from 'react';
import SearchResults from './search_results';
import SearchDetails from './search_details';

export default ({ region, date, time, partySize }) => {
    return (
        <div className='search-content-outer-container'>
            <div className='search-content-inner-container'>
                <div className='search-detail-outer-container'>
                    <SearchDetails region={region} date={date} time={time} partySize={partySize} />
                </div>
                <div className='search-results-outer-container'>
                    <SearchResults region={region} />
                </div>
            </div>
        </div>
    );
};