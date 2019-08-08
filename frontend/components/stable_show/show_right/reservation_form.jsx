import React from 'react';
import { getTimes, getPartySizes } from '../../../util/reservation_form_params';
import { getAMPM } from '../../../util/time/time';
import { fetchStableSlots, clearSlots } from '../../../actions/slot_actions';
import { turnOnLoader, turnOffLoader } from '../../../actions/loader_actions';
import StableSlots from './stable_slots';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        const now = new Date();
        const currentTime = [String(now.getHours()).padStart(2, '0'), String(now.getMinutes()).padStart(2, '0')].join(':');
        const YYYY = now.getFullYear();
        const MM = String(now.getMonth() + 1).padStart(2, '0');
        let DD = String(now.getDate()).padStart(2, '0');
        this.today = [YYYY, MM, DD].join("-");
        DD = currentTime < props.close_time.split('T')[1].slice(0, 5) ? DD : String(parseInt(DD) + 1).padStart(2, '0');
        this.minDate = [YYYY, MM, DD].join("-");
        this.state = { date: this.minDate };
        this.findOpening = this.findOpening.bind(this);
        this.updateDate = this.updateDate.bind(this);
    }

    componentDidMount() {
        this.props.clearSlots();
        document.getElementById('date-input').value = this.state.date;
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
        const partySizeSelects = getPartySizes(this.props.capacity).map((size, i) => {
            return <option key={i} value={size}>{size}</option>
        });
        const timeSelects = getTimes(this.today, this.state.date,
            this.props.open_time, this.props.close_time).map((time, i) => {
                return <option key={i} value={time}>{getAMPM(time)}</option>
        });
        return (
            <div id='reservation-form' className='reservation-form-outer-container'>
                <div className='reservation-form-inner-container'>
                    <h1>Make a reservation</h1>
                    <form className='reservation-form'>
                        <div className='party-size'>
                            <label>Horse Party Size</label>
                            <div className='hr'>
                                <select onChange={this.props.clearSlots} id='party-size-select' className='party-size-select'>
                                    {partySizeSelects}
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
                                        onChange={this.updateDate}></input>
                                </div>
                            </div>
                            <div className='time'>
                                <label>Time</label>
                                <div className='hr'>
                                    <select onChange={this.props.clearSlots} id='time-select'>
                                        {timeSelects}
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