import React from 'react';
import SearchPageForm from './search_page_form';

export default () => {
    return (
        <div className='search-banner-container'>
            <img className='search-banner-image' src={window.searchBannerURL}></img>
            <div className='search-page-form-container'>
                <SearchPageForm />
            </div>
        </div>
    );
};