import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from './redux/custom-store';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  //debugger
  return (
    
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div class='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs" element={<DialogsContainer
            store={props.store}
              //dispatch={props.dispatch}
              //mD={props.state.dialogsPage.messageData}
              //dD={props.state.dialogsPage.dialogsData}
              //nMessageD={props.state.dialogsPage.newMessageTextArea}
              />} />
            
            <Route path="/profile" element={<Profile
              store={props.store}
              />} />

            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    
  );
}

export default App;

//35