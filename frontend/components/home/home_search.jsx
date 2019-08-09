import React from 'react';
import { getSearchPathFromState } from '../../util/search/query_string';
import { getHomeSearchDateAndTime, generatePartySizes, getTodayStringDate, getTimeOptions, getOneMonthStringDate, getRegionOptions } from '../../util/search/generate_form_params';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class HomeSearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: this.props.region,
            date: this.props.date,
            time: this.props.time,
            partySize: this.props.partySize
        };
        this.search = this.search.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.region !== prevProps.region) {
            this.setState({ region: this.props.region });
        }
    }

    search() {
        this.props.history.push(getSearchPathFromState(this.state));
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    render() {
        const sizeOptions = generatePartySizes();
        const minDate = getTodayStringDate();
        const maxDate = getOneMonthStringDate(minDate);
        const timeOptions = getTimeOptions(minDate, this.state.date);
        const regionOptions = getRegionOptions();
        return (
            <>
                <div className='home-search-heading'>
                    Find a stable for any adventure
                </div>
                <div className='home-search-form'>
                    <input
                        id='search-date-select'
                        type='date'
                        min={minDate}
                        max={maxDate}
                        value={this.state.date}
                        onChange={this.update('date')}></input>
                    <div className='time-select-container'>
                        <select
                            id='search-time-select'
                            value={this.state.time}
                            onChange={this.update('time')}>
                            {timeOptions}
                        </select>
                    </div>
                    <div className='party-size-select-container'>
                        <select
                            id='search-party-size-select'
                            value={this.state.partySize}
                            onChange={this.update('partySize')}>
                            {sizeOptions}
                        </select>
                    </div>
                    <select
                        id='region-select'
                        value={this.state.region}
                        onChange={this.update('region')}>
                        {regionOptions}
                    </select>
                    <button onClick={this.search} className='search-button'>Let's ride</button>
                </div>
            </>
        );
    }
}

const mapStateToProps = ({ session }, { history }) => {
    const { date, time } = getHomeSearchDateAndTime();
    const region = String(session.region);
    const partySize = "1";
    return {
        region,
        date,
        time,
        partySize,
        history
    };
};

export default withRouter(connect(mapStateToProps)(HomeSearchForm));