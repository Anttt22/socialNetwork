import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"

let store = {
  _state: {
    dialogsPage: {
      dialogsData: [
        { id: 1, name: 'Vasya' },
        { id: 2, name: 'Gosha' },
        { id: 3, name: 'Kiril' },
        { id: 4, name: 'Petya' },
        { id: 5, name: 'Vanuya' },
        { id: 6, name: 'Tolya' }
      ],
      messageData: [
        { id: 1, name: 'hi' },
        { id: 2, name: 'how is life' },
        { id: 3, name: 'hola' },
        { id: 4, name: 'Peke pasa maricontya' },
        { id: 5, name: 'yoyoy' },
        { id: 6, name: 'holimoly' }
      ],
      newMessageTextArea: ''
    },
    profilePage: {
      postData: [
        { id: 0, message: 'holla', like: '12' },
        { id: 1, message: 'how is life', like: '44' },
        { id: 2, message: 'yop', like: '2' },
      ],
      newPostTextArea: ''
    }
  },

  _callSubscriber() {
    console.log('blind function');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },


  dispatch(action) {
  
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

    this._callSubscriber(this._state);

    } 
}


export default store;
//window.store=store