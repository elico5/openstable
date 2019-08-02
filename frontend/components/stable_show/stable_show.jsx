import React from 'react';
import ShowBanner from './show_banner';
import ShowContent from './show_content';
import { selectStable } from '../../util/selectors';
import { fetchStable } from '../../actions/stable_actions';
import { connect } from 'react-redux';

class StableShow extends React.Component {

    componentDidMount() {
        this.props.fetchStable(this.props.match.params.stableId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.stable.id != this.props.match.params.stableId) {
            this.props.fetchStable(this.props.match.params.stableId);
        }
    }

    render() {
        const { stable } = this.props;
        if (!stable) {
            return null;
        }
        return (
            <div>
                <ShowBanner />
                <ShowContent stable={stable} />
            </div>
        );
    }
};

const mapStateToProps = ({ entities }, { match }) => {
    const stableId = parseInt(match.params.stableId);
    const stable = selectStable(entities, stableId);
    return {
        stable
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchStable: stableId => dispatch(fetchStable(stableId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StableShow);