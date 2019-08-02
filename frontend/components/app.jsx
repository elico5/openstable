import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Modal from './modal/modal_component';
import NavBar from './nav/nav_bar';
import HomeBody from './splash/home_body';
import StableShow from './stable_show/stable_show';
import Footer from './footer/footer';

const App = () => {
    return (
        <div className='main-content'>
            <Modal />
            <NavBar />
            <Switch>
                <Route path='/stable/:stableId' component={StableShow} />
                <Route exact path='/' component={HomeBody} />
            </Switch>
            <div className='placeholder-content'></div>
            <Footer />
        </div>
    );
};

export default App;