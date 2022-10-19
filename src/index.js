import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import storeContext from "./storeContext"

let renderAll = (state) => {
  //debugger
  ReactDOM.render(
    <BrowserRouter>
      <storeContext.Provider value={store}>
        <App/>,
      </storeContext.Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );

}

renderAll(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderAll(state)
});



//43



