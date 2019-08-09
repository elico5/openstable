import React from 'react';
import ShowBanner from './show_banner';
import ShowContent from './show_content';
import { selectStable } from '../../util/selectors/selectors';
import { fetchStable } from '../../actions/stable_actions';
import { turnOnLoader, turnOffLoader } from '../../actions/loader_actions';
import { connect } from 'react-redux';

class StableShow extends React.Component {
    componentDidMount() {
        this.props.turnOnLoader();
        this.props.fetchStable(this.props.match.params.stableId, this.props.currentUserId).then(
            () => this.props.turnOffLoader()
        );
        const toggleStickyClass = () => {
            const mainContainer = document.getElementById('show-content');
            const reservationForm = document.getElementById('reservation-form');
            const showNav = document.getElementById('show-nav');
            if (mainContainer.getBoundingClientRect()["y"] < 0) {
                reservationForm.classList.add('sticky');
                showNav.classList.add('sticky');
            } else {
                reservationForm.classList.remove('sticky');
                showNav.classList.remove('sticky');
            }
        };
        window.addEventListener('scroll', toggleStickyClass);
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.stable || prevProps.stable.id != this.props.match.params.stableId) {
            this.props.fetchStable(this.props.match.params.stableId, this.props.currentUserId);
        }
    }

    render() {
        const { stable, stableReviews, stableUsers } = this.props;
        if (!stable) {
            return null;
        }
        return (
            <div>
                <ShowBanner />
                <ShowContent stable={stable} users={stableUsers} reviews={stableReviews} />
            </div>
        );
    }
};

const mapStateToProps = ({ entities, session }, { match }) => {
    const stableId = parseInt(match.params.stableId);
    const currentUserId = session.currentUserId;
    const { stable, stableReviews, stableUsers } = selectStable(entities, stableId);
    return {
        stable,
        stableReviews,
        stableUsers,
        currentUserId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchStable: (stableId, currentUserId) => dispatch(fetchStable(stableId, currentUserId)),
        turnOnLoader: () => dispatch(turnOnLoader()),
        turnOffLoader: () => dispatch(turnOffLoader())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StableShow);