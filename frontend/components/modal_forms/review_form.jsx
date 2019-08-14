import React from 'react';
import { turnOffModal } from '../../actions/modal_actions';
import { createReview } from '../../actions/review_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAMPM } from '../../util/time/time';

const ReviewForm = ({ stable, reservation, history, turnOffModal, createReview }) => {
    const selectOverall = e => {
        document.getElementsByClassName('review-form-overall-selection').item(0).childNodes.forEach(button => button.classList.remove('selected'));
        e.target.classList.add('selected');
    };
    const selectService = e => {
        document.getElementsByClassName('review-form-service-selection').item(0).childNodes.forEach(button => button.classList.remove('selected'));
        e.target.classList.add('selected');
    };
    const selectCleanliness = e => {
        document.getElementsByClassName('review-form-cleanliness-selection').item(0).childNodes.forEach(button => button.classList.remove('selected'));
        e.target.classList.add('selected');
    };
    const selectValue = e => {
        document.getElementsByClassName('review-form-value-selection').item(0).childNodes.forEach(button => button.classList.remove('selected'));
        e.target.classList.add('selected');
    };
    const closeModalAndRedirect = () => {
        turnOffModal();
        history.push('/my/profile/reviews');
    }
    const submitReview = () => {
        const bodyElement = document.getElementById('review-body');
        const body = bodyElement.value;
        if (body.length < 50 || body.length > 2000) {
            bodyElement.classList.add('invalid-body');
        } else {
            const selectedValues = Array.from(document.querySelectorAll('button.selected')).map(button => {
                return parseInt(button.getAttribute('data-value'));
            });
            const [overall, service, cleanliness, value] = selectedValues;
            createReview(reservation.id, overall, service, cleanliness, value, body).then(
                () => closeModalAndRedirect()
            );
        }
    };
    return (
        <div className='review-form-container'>
            <div className='review-form-stable-name'>
                {stable.name}
            </div>
            <div className='review-form-reservation-details'>
                Review your stay on {reservation.date} at {getAMPM(reservation.time.slice(11, 16))}
            </div>
            <div className='review-form-image-container'>
                <img className='review-form-image' src={stable.pictureUrl}></img>
            </div>
            <div className='selection-heading'>
                How would you rate your overall experience with this stable?
            </div>
            <div className='review-form-overall-selection'>
                <button onClick={selectOverall} data-value={1}>Terrible</button>
                <button onClick={selectOverall} data-value={2}>Bad</button>
                <button onClick={selectOverall} data-value={3} className='selected'>Okay</button>
                <button onClick={selectOverall} data-value={4}>Good</button>
                <button onClick={selectOverall} data-value={5}>Great</button>
            </div>
            <div className='selection-heading'>
                How would you rate this stable's service?
            </div>
            <div className='review-form-service-selection'>
                <button onClick={selectService} data-value={1}>Terrible</button>
                <button onClick={selectService} data-value={2}>Bad</button>
                <button onClick={selectService} data-value={3} className='selected'>Okay</button>
                <button onClick={selectService} data-value={4}>Good</button>
                <button onClick={selectService} data-value={5}>Great</button>
            </div>
            <div className='selection-heading'>
                How would you rate this stable's cleanliness?
            </div>
            <div className='review-form-cleanliness-selection'>
                <button onClick={selectCleanliness} data-value={1}>Terrible</button>
                <button onClick={selectCleanliness} data-value={2}>Bad</button>
                <button onClick={selectCleanliness} data-value={3} className='selected'>Okay</button>
                <button onClick={selectCleanliness} data-value={4}>Good</button>
                <button onClick={selectCleanliness} data-value={5}>Great</button>
            </div>
            <div className='selection-heading'>
                How would you rate this stable's value?
            </div>
            <div className='review-form-value-selection'>
                <button onClick={selectValue} data-value={1}>Terrible</button>
                <button onClick={selectValue} data-value={2}>Bad</button>
                <button onClick={selectValue} data-value={3} className='selected'>Okay</button>
                <button onClick={selectValue} data-value={4}>Good</button>
                <button onClick={selectValue} data-value={5}>Great</button>
            </div>
            <div className='selection-heading'>
                Please describe your experience (minimum 50 characters)
            </div>
            <textarea id='review-body'></textarea>
            <button onClick={submitReview} className='submit-review-button'>Submit Review</button>
        </div>
    );
};

const mapStateToProps = (state, { info }) => {
    const { stable, reservation } = info;
    return {
        stable,
        reservation
    };
};

const mapDispatchToProps = dispatch => {
    return {
        turnOffModal: () => dispatch(turnOffModal()),
        createReview: (reservationId, overall, service, cleanliness, value, body) => dispatch(createReview(reservationId, overall, service, cleanliness, value, body))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));