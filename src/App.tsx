import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsTypes} from "./redux/store";
import { DialogsContainer } from './components/Dialogs/DialogsContainer';



 export type AppStatePropsType = {
     dispatch(action: ActionsTypes) :void
     store: any//StoreType
 }


 const App:React.FC<AppStatePropsType> = (props: AppStatePropsType) => {

     // const state = props.store.getState();

     return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path='/profile'
                           render={() => <Profile store={props.store}
                                                  dispatch={props.dispatch}
                    />}/>
                    {/*<Route path='/news' render={() => <News/>}/>*/}
                    {/*<Route path='/music' render={() => <Music/>}/>*/}
                    {/*<Route path='/settings' render={() => <Settings/>}/>*/}
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
