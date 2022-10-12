import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';




export let renderAll = (state)=>{
  ReactDOM.render(
    <App state={state}/>,
    document.getElementById('root')
  );

}






