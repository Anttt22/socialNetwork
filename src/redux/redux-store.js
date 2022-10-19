import {combineReducers, legacy_createStore as createStore} from "redux"
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"



let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
})

const store = createStore(reducers);

  export default store;