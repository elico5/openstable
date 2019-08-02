import React from 'react';

export default ({ description }) => {
    if (description.length > 220) {
        return null;
    } else {
        return (
            <p>{description}</p>
        );
    }
};