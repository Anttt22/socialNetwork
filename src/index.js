
import state, {subscribe} from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';




let renderAll = ()=>{
  ReactDOM.render(
    <App state={state}/>,
    document.getElementById('root')    
  );

}

renderAll(state);

subscribe(renderAll);







