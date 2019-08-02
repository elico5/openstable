import React from 'react';
import ShowLeft from './show_left/show_left';
import ShowRight from './show_right/show_right';

export default ({ stable }) => {
    if (stable.groomName) {
        return (
            <div className='show-content'>
                <ShowLeft name={stable.name}
                    description={stable.description} />
                <ShowRight lat={stable.lat}
                    lng={stable.lng}
                    pictureUrl={stable.pictureUrl}
                    address={stable.address}
                    phone_number={stable.phone_number}
                    open_time={stable.open_time}
                    close_time={stable.close_time}
                    groomName={stable.groomName} />
            </div>
        );
    } else {
        return null;
    }
};