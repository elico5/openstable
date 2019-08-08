import React from 'react';
import { RESERVATION_CONFIRMATION_FLAG, LOGIN_FORM_FLAG, turnOnModal } from '../../actions/modal_actions';
import { getAMPM } from '../../util/reservation_form_params';
import renderStars from '../../util/render_stars';
import priceCategory from '../../util/price_category';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const SearchResultItem = ({ stable, slots, userId, history, turnOnLoginModal, turnOnConfirmationModal }) => {
    const initiateModal = slot => {
        if (userId) {
            turnOnConfirmationModal(slot);
        } else {
            turnOnLoginModal();
        }
    };
    const slotButtons = Object.values(slots).sort((slot1, slot2) => {
        return slot1.time > slot2.time ? 1 : -1;
    }).map((slot, i) => {
        return <button key={i}
            className='slot-button'
            onClick={() => initiateModal(slot)}>{getAMPM(slot.time)}</button>;
    });
    const filledPrice = priceCategory(stable.price);
    let unfilledPrice = '';
    for (let i = 0; i < 4 - filledPrice.length; i++) {
        unfilledPrice += '$';
    }
    return (
        <div className='search-item-container'>
            <div className='search-item-image-container'>
                <img className='search-item-image'
                    onClick={() => history.push(`/stables/${stable.id}`)}
                    src={stable.pictureUrl}></img>
            </div>
            <div className='search-item-detail-container'>
                <div className='search-item-detail-name' onClick={() => history.push(`/stables/${stable.id}`)}>
                    {stable.name}
                </div>
                <div className='search-item-detail-upper-container'>
                    <div className='search-item-detail-upper-left'>
                        <div>{renderStars(stable.overallRating)}</div>
                        <div>
                            <i className='fas fa-comments'></i> {stable.reviewCount} reviews
                            <span className='interpunct'>·</span>
                            <i className='fas fa-chart-line'></i> {stable.reservationsToday} reservations today
                        </div>
                    </div>
                    <div className='search-item-detail-upper-right'>
                        <div>
                            <span>{filledPrice}</span>
                            <span className='unfilled'>{unfilledPrice}</span>
                        </div>
                        <div>
                            {stable.city}, {stable.state}
                        </div>
                    </div>
                </div>
                <div className='search-item-detail-lower-container'>
                    {slotButtons}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ session }, { stable, slots, history }) => {
    return {
        stable,
        slots,
        history,
        userId: session.currentUserId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        turnOnConfirmationModal: info => dispatch(turnOnModal(RESERVATION_CONFIRMATION_FLAG, info)),
        turnOnLoginModal: () => dispatch(turnOnModal(LOGIN_FORM_FLAG))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResultItem));
