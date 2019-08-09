import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
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
    try {
        const query_string = location.pathname.slice(8);
        const [regionParams, dateParams, timeParams, partysizeParams] = query_string.split('+').map((portion) => {
            return portion.split('=');
        });
        let region, date, time, partySize;
        if (regionParams[0] === 'region' && dateParams[0] === 'date' && timeParams[0] === 'time' && partysizeParams[0] === 'partysize') {
            [region, date, time, partySize] = [parseInt(regionParams[1]), dateParams[1], timeParams[1], parseInt(partysizeParams[1])];
            if (date.length !== 10 || time.length !== 5 || date.split('-').length !== 3 ||
                time.split(':').length !== 2 || isNaN(region) || isNaN(partySize)) {
                throw "Invalid date or time";
            }
        } else {
            throw "Invalid query string";
        }
        return {
            valid: true
        };
    } catch (error) {
        return {
            valid: false
        };
    }
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