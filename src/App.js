import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Musik from "./components/Musik/Musik";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <div className='app_wrapper'>
            <Header/>
            <Navbar/>
            <div className='app_wrapper_content'>
                <Route path='/dialogs' render={() => <Dialogs
                    dialogsPage={props.state.dialogsPage}
                    dispatch={props.dispatch}
                />}/>
                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}
                />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/musik' render={() => <Musik/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}


export default App;