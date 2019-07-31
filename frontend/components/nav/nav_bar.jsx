import React from 'react';
import NavLogo from './nav_logo';
import NavRight from './nav_right';

export default () => {
    return (
        <header className='nav-container'>
            <NavLogo />
            <NavRight />
        </header>
    );
};