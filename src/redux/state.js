let store = {
  _state : {
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
  getState(){
    return this._state;
  },

  _callSubscriber(){
    console.log('blind function');
   },

  addPostS() {
    let newpost = {
      id: 5,
      message: this._state.profilePage.newPostTextArea,
      like: 0
    }
    this._state.profilePage.postData.push(newpost)
    this._state.profilePage.newPostTextArea='';
    this._callSubscriber(this._state);
  },

  updateNewPostTextArea(updatedText){
    this._state.profilePage.newPostTextArea = updatedText;
    this._callSubscriber(this._state);
  },

  addMessageS(){
    var newMessage = {
      id:7,
      name: this._state.dialogsPage.newMessageTextArea,
    }
    this._state.dialogsPage.messageData.push(newMessage)
    this._state.dialogsPage.newMessageTextArea='';
    this._callSubscriber(this._state);
    
  },

  updateNewMessageTextArea(updatedText){
    this._state.dialogsPage.newMessageTextArea = updatedText;
    this._callSubscriber(this._state);
  },

  subscribe(observer){
    this._callSubscriber=observer;
  }

}


export default store;
//window.store=store