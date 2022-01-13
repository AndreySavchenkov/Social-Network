import React from 'react';
import './App.scss';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import {UsersContainer} from "./components/Users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Login} from "./components/Login/Login";


const App: React.FC = React.memo(() => {

    // const state = props.store.getState();

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className='app-inner'>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={() => <Dialogs/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>

    );
})

export default App;
