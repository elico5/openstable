import React from 'react';
import { withRouter } from 'react-router-dom';

const NavLogo = ({ history }) => {
    const toHome = () => {
        history.push("/");
    };
    return (
        <div className='nav-logo' onClick={toHome}>
            <i className='fas fa-horse-head'></i>
            <span>OpenStable</span>
        </div>
    );
};

export default withRouter(NavLogo);