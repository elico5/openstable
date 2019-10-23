import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import predefinedState from './util/predefined_state';

document.title = 'OpenStable';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preState = predefinedState(window.currentUser);
        delete window.currentUser;
        store = configureStore(preState);
    } else {
        store = configureStore();
    }
    const rootElement = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, rootElement);
});