import React from 'react';
import ReservationForm from './reservation_form';
import StablePicture from './stable_picture';
import Map from './map';
import InfoList from './info_list';

export default ({ lat, lng, pictureUrl, address, phone_number, open_time, close_time, groomName }) => {
    return (
        <div className='show-right-container'>
            <ReservationForm />
            <StablePicture pictureUrl={pictureUrl} />
            <Map lat={lat} lng={lng} address={address} />
            <InfoList phone_number={phone_number}
                open_time={open_time}
                close_time={close_time}
                groomName={groomName} />
        </div>
    );
};