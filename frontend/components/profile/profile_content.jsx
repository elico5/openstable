import React from 'react';
import MyUserInformation from './my_user_information/my_user_information';
import MyUpcomingReservations from './my_upcoming_reservations/my_upcoming_reservations';
import MyPastReservations from './my_past_reservations/my_past_reservations';
import MyFavorites from './my_favorites/my_favorites';
import { turnOnLoader, turnOffLoader } from '../../actions/loader_actions';
import { fetchUserInfo } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class ProfileContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userInfoLoaded: false };
        this.tabContentIds = {
            'user-info-tab': 'information',
            'upcoming-reservations-tab': 'upcoming-reservations',
            'past-reservations-tab': 'past-reservations',
            'reviews-tab': 'reviews',
            'favorites-tab': 'favorites'
        };
        this.changeContent = this.changeContent.bind(this);
        this.setContentVisibility = this.setContentVisibility.bind(this);
        this.finishLoading = this.finishLoading.bind(this);
    }

    changeContent(e) {
        const fragment = e.target.id.slice(0, -4);
        this.props.history.push('/my/profile/' + fragment);
    }

    setContentVisibility() {
        const fragment = this.props.location.pathname.split('/')[3];
        const fragmentId = fragment + '-tab';
        if (!Object.keys(this.tabContentIds).includes(fragmentId)) {
            this.props.history.push('/my/profile/user-info');
        } else {
            const tabElement = document.getElementById(fragmentId);
            tabElement.classList.add('active-tab');
            const contentElement = document.getElementById(this.tabContentIds[fragmentId]);
            contentElement.classList.add('active-content');
            const otherTabIds = Object.keys(this.tabContentIds).filter(fragment => fragment !== fragmentId);
            otherTabIds.forEach(tabId => {
                const tabElement = document.getElementById(tabId);
                tabElement.classList.remove('active-tab');
                const contentElement = document.getElementById(this.tabContentIds[tabId]);
                contentElement.classList.remove('active-content');
            });
        }
    }

    finishLoading() {
        this.setState({ userInfoLoaded: true });
        this.props.turnOffLoader();
        this.setContentVisibility();
    }

    componentDidMount() {
        this.props.turnOnLoader();
        this.props.fetchUserInfo(this.props.currentUserId).then(
            () => this.finishLoading()
        );
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.setContentVisibility();
        }
    }

    render() {
        if (this.state.userInfoLoaded) {
            return (
                <div className='profile-content-outer-container'>
                    <div className='profile-content-inner-container'>
                        <div className='tab-nav-bar'>
                            <div id='user-info-tab'
                                className='tab-nav-tab'
                                onClick={this.changeContent}>
                                My User Information
                            </div>
                            <div id='upcoming-reservations-tab'
                                className='tab-nav-tab'
                                onClick={this.changeContent}>
                                My Upcoming Reservations
                            </div>
                            <div id='past-reservations-tab'
                                className='tab-nav-tab'
                                onClick={this.changeContent}>
                                My Past Reservations
                            </div>
                            <div id='reviews-tab'
                                className='tab-nav-tab'
                                onClick={this.changeContent}>
                                My Reviews
                            </div>
                            <div id='favorites-tab'
                                className='tab-nav-tab'
                                onClick={this.changeContent}>
                                My Favorites
                            </div>
                        </div>
                        <div id='information'>
                            <MyUserInformation />
                        </div>
                        <div id='upcoming-reservations'>
                            <MyUpcomingReservations />
                        </div>
                        <div id='past-reservations'>
                            <MyPastReservations />
                        </div>
                        <div id='reviews'>

                        </div>
                        <div id='favorites'>
                            <MyFavorites />
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = ({ session }, { location, history }) => {
    const { currentUserId } = session;
    return {
        currentUserId,
        location,
        history
    };
};

const mapDispatchToProps = dispatch => {
    return {
        turnOnLoader: () => dispatch(turnOnLoader()),
        turnOffLoader: () => dispatch(turnOffLoader()),
        fetchUserInfo: userId => dispatch(fetchUserInfo(userId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileContent));