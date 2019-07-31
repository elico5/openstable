import React from 'react';
import Modal from './modal/modal_component';
import NavBar from './nav/nav_bar';
import CrossFadeImages from './splash/cross_fade_images';
import Footer from './footer/footer';

const App = () => {
    return (
        <div>
            <Modal />
            <NavBar />
            <CrossFadeImages />
            <div className='placeholder-content'></div>
            <Footer />
        </div>
    );
};

export default App;