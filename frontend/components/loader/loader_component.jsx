import React from 'react';
import { connect } from 'react-redux';

const Loader = ({ loader }) => {
    if (loader) {
        return (
            <div className='loader-background'>
                <div className='loader-foreground'></div>
                <i className='fas fa-horse' />
            </div>
        );
    } else {
        return null;
    }
};

const mapStateToProps = ({ ui }) => {
    return {
        loader: ui.loader
    };
};

export default connect(mapStateToProps)(Loader);