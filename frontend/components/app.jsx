import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from './loader/loader_component';
import Modal from './modal/modal_component';
import NavBar from './nav/nav_bar';
import HomeBody from './home/home_body';
import StableShow from './stable_show/stable_show';
import { SearchRoute, ProtectedRoute } from '../util/routes/custom_routes';
import Search from './search/search';
import UserProfile from './profile/user_profile';
import Footer from './footer/footer';

const App = () => {
    return (
        <div className='main-background'>
            <Loader />
            <div className='main-content'>
                <div className='content-wrapper'>
                    <Modal />
                    <NavBar />
                    <Switch>
                        <Route path='/stables/:stableId' component={StableShow} />
                        <SearchRoute path='/search' component={Search} />
                        <ProtectedRoute path='/my/profile' component={UserProfile} />
                        <Route exact path='/' component={HomeBody} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default App;