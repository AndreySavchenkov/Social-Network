import React, {FC, memo, useEffect} from 'react';
import './App.scss';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import {UsersContainer} from "./components/Users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Login} from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {authReducerActionsTypes} from "./redux/auth-reducer";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux/redux-store";
import {initizlizeApp} from "./redux/app-reducer";
import {app} from "./redux/selectors";
import {Preloader} from "./components/common/Preloader/Preloader";


const App: FC = memo(() => {

    type AppDispatch = ThunkDispatch<AppStateType, any, authReducerActionsTypes>

    const {initialized} = useSelector(app)

    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(initizlizeApp())
    }, [dispatch, initialized])

    return (!initialized) ? <Preloader/> :
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
})

export default App;
