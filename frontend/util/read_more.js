import React from 'react';

export default (body, identifier = "") => {
    if (body.length > 200) {
        const ellipsisId = 'ellipsis-' + identifier;
        const moreTextId = 'more-text-' + identifier;
        const toggleButtonId = 'toggle-button-' + identifier;
        const readMore = () => {
            const ellipsis = document.getElementById(ellipsisId);
            const moreText = document.getElementById(moreTextId);
            const toggleButton = document.getElementById(toggleButtonId);
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
        const front = body.slice(0, 200);
        const back = body.slice(200);
        return (
            <>
                <p>
                    {front}
                    <span id={ellipsisId} className='ellipsis'>...</span>
                    <span id={moreTextId} className='more-text'>{back}</span>
                </p>
                <button id={toggleButtonId} className='toggle-button' onClick={readMore}>+ Read More</button>
            </>
        );
    } else {
        return (
            <p>{body}</p>
        );
    }
};