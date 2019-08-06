import React from 'react';
import ShowLeft from './show_left/show_left';
import ShowRight from './show_right/show_right';

export default ({ stable, users, reviews }) => {
    if (stable.groomName) {
        return (
            <div id='show-content' className='show-content'>
                <ShowLeft name={stable.name}
                    description={stable.description}
                    overallRating={stable.overallRating.toFixed(1)}
                    reviewCount={stable.reviewCount}
                    price={stable.price}
                    serviceRating={stable.serviceRating.toFixed(1)}
                    cleanlinessRating={stable.cleanlinessRating.toFixed(1)}
                    valueRating={stable.valueRating.toFixed(1)}
                    reviews={reviews}
                    users={users} />
                <ShowRight lat={stable.lat}
                    lng={stable.lng}
                    pictureUrl={stable.pictureUrl}
                    address={stable.address}
                    phone_number={stable.phone_number}
                    open_time={stable.open_time}
                    close_time={stable.close_time}
                    groomName={stable.groomName}
                    capacity={stable.capacity} />
            </div>
        );
    } else {
        return null;
    }
};