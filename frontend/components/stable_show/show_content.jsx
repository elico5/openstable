import React from 'react';
import ShowLeft from './show_left/show_left';
import ShowRight from './show_right/show_right';

export default () => {
    return (
        <div className='show-content'>
            <ShowLeft />
            <ShowRight />
        </div>
    );
};