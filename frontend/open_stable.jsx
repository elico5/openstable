import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import predefinedState from './util/predefined_state';

// TESTING IMPORTS
// TESTING IMPORTS

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preState = predefinedState(window.currentUser);
        delete window.currentUser;
        store = configureStore(preState);
    } else {
        store = configureStore();
    }
    
    // TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // TESTING

    const rootElement = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, rootElement);
});