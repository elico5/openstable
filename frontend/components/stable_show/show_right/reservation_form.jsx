import React from 'react';
import { generateStablePartyOptions, getTodayStringDate, getOneMonthStringDate, getShowSearchDate, generateShowTimeOptions } from '../../../util/search/generate_form_params';
import { fetchStableSlots, clearSlots } from '../../../actions/slot_actions';
import { turnOnLoader, turnOffLoader } from '../../../actions/loader_actions';
import StableSlots from './stable_slots';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.minDate = getShowSearchDate(props.close_time);
        this.today = getTodayStringDate();
        this.maxDate = getOneMonthStringDate(this.today);
        this.state = { date: this.minDate };
        this.findOpening = this.findOpening.bind(this);
        this.updateDate = this.updateDate.bind(this);
    }

    componentDidMount() {
        this.props.clearSlots();
        document.getElementById('date-input').value = this.minDate;
    }

    updateDate() {
        this.props.clearSlots();
        this.setState({date: document.getElementById('date-input').value});
    }

    findOpening() {
        const date = this.state.date;
        const time = document.getElementById('time-select').value;
        const partySize = document.getElementById('party-size-select').value;
        this.props.turnOnLoader();
        this.props.fetchStableSlots(this.props.stableId, date, time, partySize).then(
            () => this.props.turnOffLoader()
        );
    }

    render() {
        const partySizeOptions = generateStablePartyOptions(this.props.capacity);
        const timeOptions = generateShowTimeOptions(this.today, this.state.date, this.props.open_time, this.props.close_time);
        return (
            <div id='reservation-form' className='reservation-form-outer-container'>
                <div className='reservation-form-inner-container'>
                    <h1>Make a reservation</h1>
                    <form className='reservation-form'>
                        <div className='party-size'>
                            <label>Horse Party Size</label>
                            <div className='hr'>
                                <select onChange={this.props.clearSlots} id='party-size-select' className='party-size-select'>
                                    {partySizeOptions}
                                </select>
                            </div>
                        </div>
                        <div className='reservation-lower-inputs'>
                            <div className='date'>
                                <label>Date</label>
                                <div className='hr'>
                                    <input id='date-input'
                                        className='date-input'
                                        type='date'
                                        min={this.minDate}
                                        max={this.maxDate}
                                        onChange={this.updateDate}></input>
                                </div>
                            </div>
                            <div className='time'>
                                <label>Time</label>
                                <div className='hr'>
                                    <select onChange={this.props.clearSlots} id='time-select'>
                                        {timeOptions}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                    <button className='reservation-form-submit' onClick={this.findOpening}>Find an Opening</button>
                </div>
                <StableSlots stableId={this.props.stableId} />
            </div>
        );
    }
}

const mapStateToProps = ({ entities }, { match }) => {
    const stable = entities.stables[match.params.stableId];
    const { open_time, close_time, capacity, id } = stable;
    return {
        open_time,
        close_time,
        capacity,
        stableId: id
    };
};


const mapDispatchToProps = dispatch => {
    return {
        clearSlots: () => dispatch(clearSlots()),
        fetchStableSlots: (stableId, date, time, party_size) => dispatch(fetchStableSlots(stableId, date, time, party_size)),
        turnOnLoader: () => dispatch(turnOnLoader()),
        turnOffLoader: () => dispatch(turnOffLoader())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReservationForm));