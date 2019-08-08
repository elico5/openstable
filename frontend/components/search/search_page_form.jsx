import React from 'react';
import { getQueryStringParameters, getSearchPathFromState } from '../../util/search/query_string';
import { generatePartySizes, getTodayStringDate, getTimeOptions, getOneMonthStringDate, getRegionOptions } from '../../util/search/generate_form_params';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class SearchPageForm extends React.Component {
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
            <div className='search-search-form'>
                <div className='party-size-search-container'>
                    <select 
                        value={this.state.partySize}
                        id='search-search-party-size-select'
                        onChange={this.update('partySize')}>
                        {sizeOptions}
                    </select>
                </div>
                <input
                    id='search-search-date-select'
                    type='date'
                    min={minDate}
                    max={maxDate}
                    value={this.state.date}
                    onChange={this.update('date')}>
                </input>
                <div className='time-search-container'>
                    <select
                        value={this.state.time}
                        id='search-search-time-select'
                        onChange={this.update('time')}>
                        {timeOptions}
                    </select>
                </div>
                <div className='region-search-container'>
                    <select 
                        id='search-region-select'
                        value={this.state.region}
                        onChange={this.update('region')}>
                        {regionOptions}
                    </select>
                </div>
                <button onClick={this.search} className='search-search-button'>Find a Stable</button>
            </div>
        );
    }
}

const mapStateToProps = (state, { history, location }) => {
    const {region, date, time, partySize} = getQueryStringParameters(location.pathname);
    return {
        region,
        date,
        time,
        partySize,
        history
    };
};

export default withRouter(connect(mapStateToProps)(SearchPageForm));