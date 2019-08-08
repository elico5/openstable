import React from 'react';
import HomeSearch from './home_search';

export default () => {
    return (
        <div class='cross-fade-container'>
            <img src={window.splash1URL} />
            <img src={window.splash2URL} />
            <img src={window.splash3URL} />
            <img src={window.splash4URL} />
            <div className='home-search-container'>
                <HomeSearch />
            </div>
        </div>
    );
};