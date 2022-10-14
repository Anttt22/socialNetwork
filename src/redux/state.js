const ADD_POST='ADD_POSTS'
const UPDATE_NEW_POST_TEXT_AREA ='UPDATE_NEW_POST_TEXT_AREA'
const ADD_MESSAGES='ADD_MESSAGES'
const UPDATE_NEW_MESSAGE_TEXT_AREA='UPDATE_NEW_MESSAGE_TEXT_AREA'

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
    //debugger;
    if (action.type === ADD_POST) {
      let newpost = {
        id: 5,
        message: this._state.profilePage.newPostTextArea,
        like: 0
      }
      this._state.profilePage.postData.push(newpost)
      this._state.profilePage.newPostTextArea = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT_AREA) {

      this._state.profilePage.newPostTextArea = action.newtext;

      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGES) {
      var newMessage = {
        id: 7,
        name: this._state.dialogsPage.newMessageTextArea,
      }
      //debugger
      this._state.dialogsPage.messageData.push(newMessage)
      this._state.dialogsPage.newMessageTextArea = '';
      this._callSubscriber(this._state);
      //debugger

    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT_AREA) {
      this._state.dialogsPage.newMessageTextArea = action.newtext;
      this._callSubscriber(this._state);
    }
  },
}


export const onChangeMessageAreaActionCreator = (text) => {
  //debugger
  return {
    type: "UPDATE_NEW_MESSAGE_TEXT_AREA",
    newtext: text
  }
}

export const AddMessageActionCreator = () => {
  //debugger
  return {
    type: 'ADD_MESSAGES'
  }
}

export const addPostActionCreator = () => {
  return {
    type: "ADD_POSTS"
  }
}
export const onChangeTextAreaActionCreator = (text) => {
  return {
    type: "UPDATE_NEW_POST_TEXT_AREA",
    newtext: text
  }
}


export default store;
//window.store=store