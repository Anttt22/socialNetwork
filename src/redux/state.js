import { renderAll } from '.././render'


let state = {
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
  },
  profilePage: {
    postData: [
      { id: 0, message: 'holla', like: '12' },
      { id: 1, message: 'how is life', like: '44' },
      { id: 2, message: 'yop', like: '2' },
    ],
    newPostTextArea: ''
  }
}

export let addPostS = () => {
  var newpost = {
    id: 5,
    message: state.profilePage.newPostTextArea,
    like: 0
  }
  state.profilePage.postData.push(newpost)
  state.profilePage.newPostTextArea='';
  renderAll(state);
}

export let updateNewPostTextArea = (updatedText) => {
  state.profilePage.newPostTextArea = updatedText;

  renderAll(state);
}


export default state