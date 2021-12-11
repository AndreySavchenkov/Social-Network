import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import {UsersContainer} from "./components/Users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {DialogsRedirect} from "./components/Dialogs/Dialogs";
import {ProfileRedirect} from "./components/Profile/ProfileContainer";
import {Login} from "./components/Login/Login";


const App: React.FC = () => {

    // const state = props.store.getState();

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsRedirect/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileRedirect/>}/>
                    {/*<Route path='/news' render={() => <News/>}/>*/}
                    {/*<Route path='/music' render={() => <Music/>}/>*/}
                    {/*<Route path='/settings' render={() => <Settings/>}/>*/}
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
