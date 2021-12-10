import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import {HeaderContainerWithConnect} from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Dialogs} from "./components/Dialogs/Dialogs";


const App: React.FC = () => {

    // const state = props.store.getState();

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainerWithConnect/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    {/*<Route path='/news' render={() => <News/>}/>*/}
                    {/*<Route path='/music' render={() => <Music/>}/>*/}
                    {/*<Route path='/settings' render={() => <Settings/>}/>*/}
                    <Route path='/users' render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
