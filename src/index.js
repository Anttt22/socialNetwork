import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


let renderAll = ()=>{
  ReactDOM.render(
    <App state={store.getState()}/>,
    document.getElementById('root')    
  );

}

renderAll(store._state);

store.subscribe(renderAll);







