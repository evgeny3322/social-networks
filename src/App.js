import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Routes, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper__content'>
                    <Routes>
                        {/*<Route path="/dialogs/*" element={<Dialogs/>}/>*/}
                        {/*<Route path="/dialogs/*" render={() => <Dialogs/>}/>*/}
                        {/*<Route path="/profile" element={<Profile/>}/>*/}
                        {/*<Route path="/profile" render={() => <Profile/>}/>*/}
                        <Route path="/dialogs/*" element={
                            <Dialogs
                                messages={props.state.dialogsPage.messages}
                                dialogs={props.state.dialogsPage.dialogs}
                            />}
                        />
                        <Route path="/profile" element={
                            <Profile
                                posts={props.state.profilePage.posts}
                                addPost={props.addPost}
                            />}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
