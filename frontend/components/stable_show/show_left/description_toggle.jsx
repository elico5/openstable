import React from 'react';

export default ({ description }) => {
    if (description.length > 220) {
        const readMore = () => {
            const ellipsis = document.getElementById('ellipsis');
            const moreText = document.getElementById('more-text');
            const toggleButton = document.getElementById('toggle-button');
            if (ellipsis.style.display === 'none') {
                ellipsis.style.display = 'inline';
                toggleButton.innerHTML = '+ Read More';
                moreText.style.display = 'none';
            } else {
                ellipsis.style.display = 'none';
                toggleButton.innerHTML = '- Read Less';
                moreText.style.display = 'inline';
            }
        };
        const front = description.slice(0, 220);
        const back = description.slice(220);
        return (
            <>
                <p>
                    {front}
                    <span id='ellipsis'>...</span>
                    <span id='more-text'>{back}</span>
                </p>
                <button id='toggle-button' onClick={readMore}>+ Read More</button>
            </>
        );
    } else {
        return (
            <p>{description}</p>
        );
    }
};