import React from 'react';
import Modal from './modal/modal_component';
import NavBar from './nav/nav_bar';
import CrossFadeImages from './splash/cross_fade_images';

const App = () => {
    return (
        <div>
            <Modal />
            <NavBar />
            <CrossFadeImages />
            <div>
                SPLASH
            </div>
        </div>
    );
};

export default App;