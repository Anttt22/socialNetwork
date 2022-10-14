import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


let renderAll = ()=>{
  ReactDOM.render(
    <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>,
    document.getElementById('root')    
  );

}

renderAll(store._state);

store.subscribe(renderAll);



//40



