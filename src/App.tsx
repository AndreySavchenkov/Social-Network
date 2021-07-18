import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

//NEEDED TO CHANGE!
// type appStatePropsType = {state: {
//         posts: {id: number, message: string, likesCount: number}[],
//         dialogs: {id: number, name: string}[],
//         messages: {id: number, message: string}[]
//     }
// }


const App = (props:any) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar name={props.state.friendsList}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogPage}/>}/>
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage}
                                                                  addPost={props.addPost}
                                                                  updateNewPostText={props.newPostText}
                    />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}


export default App;