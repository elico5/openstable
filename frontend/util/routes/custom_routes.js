import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { getTodayStringDate, getNowStringTime } from '../search/generate_form_params';
import { connect } from 'react-redux';

const Search = ({ component: Component, path, valid }) => {
    return (<Route path={path} render={(props) => (
        valid ? (
            <Component {...props} />
        ) : (
            <Redirect to='/' />
        )
    )}/>);
};

const mapStateToSearchProps = (state, { location }) => {
    const re = new RegExp(/^region=(\d)\+date=(\d{4}-\d{2}-\d{2})\+time=(\d{2}:\d{2})\+partysize=(\d{1,2})$/);
    const query = location.pathname.slice(8);
    const match = re.exec(query);
    if (match) {
        const [region, date, time, size] = [parseInt(match[1]), match[2], match[3], parseInt(match[4])];
        const [today, now] = [getTodayStringDate(), getNowStringTime()];
        if (
            (region >= 0 && region <= 5) &&
            (time >= '00:00' && time <= '23:59') &&
            (date > today || (date === today && time >= now)) &&
            (size >= 1 && size <= 20)
        ) { 
            return { valid: true };
        }
    } 
    return { valid: false }
};

export const SearchRoute = withRouter(connect(mapStateToSearchProps)(Search));

const Protected = ({ component: Component, path, loggedIn }) => {
    return (
        <Route path={path} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to='/' />
        )
        )}/>
    );
};

const mapProtectedStateToProps = ({ session }) => {
    return {
        loggedIn: Boolean(session.currentUserId)
    };
};

export const ProtectedRoute = withRouter(connect(mapProtectedStateToProps)(Protected));