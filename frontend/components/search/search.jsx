import React from 'react';
import SearchBanner from './search_banner';
import SearchContent from './search_content';
import { fetchStablesAndSlots } from '../../actions/slot_actions';
import { turnOnLoader, turnOffLoader } from '../../actions/loader_actions';
import { connect } from 'react-redux';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searched: false};
        this.finishSearch = this.finishSearch.bind(this);
    }

    finishSearch() {
        this.props.turnOffLoader();
        this.setState({searched: true});
    }

    componentDidMount() {
        const { region, date, time, partySize } = this.props;
        this.props.turnOnLoader();
        this.props.fetchStablesAndSlots(region, date, time, partySize).then(
            () => this.finishSearch());
    }

    componentDidUpdate(prevProps) {
        if (this.props.query_string !== prevProps.query_string) {
            const { region, date, time, partySize } = this.props;
            this.props.turnOnLoader();
            this.props.fetchStablesAndSlots(region, date, time, partySize).then(
                () => this.props.turnOffLoader()
            );
        }
    }

    render() {
        if (this.state.searched) {
            const { region, date, time, partySize } = this.props;
            return (
                <>
                    <SearchBanner region={region} date={date} time={time} partySize={partySize} />
                    <SearchContent region={region} date={date} time={time} partySize={partySize} />
                </>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state, { location }) => {
    const query_string = location.pathname.slice(8);
    let [region, date, time, partySize] = query_string.split('+').map((portion) => {
        return portion.split('=')[1];
    });
    [region, partySize] = [region, partySize].map(stringNumber => parseInt(stringNumber));
    return {
        query_string,
        region,
        date,
        time,
        partySize
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchStablesAndSlots: (regionId, date, time, partySize) => dispatch(fetchStablesAndSlots(regionId, date, time, partySize)),
        turnOnLoader: () => dispatch(turnOnLoader()),
        turnOffLoader: () => dispatch(turnOffLoader())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)