
const ADD_MESSAGES = 'ADD_MESSAGES'
const UPDATE_NEW_MESSAGE_TEXT_AREA = 'UPDATE_NEW_MESSAGE_TEXT_AREA'


var initState={
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
}

const dialogsReducer = (state=initState, action) => {
  //debugger
    switch (action.type) {
        case ADD_MESSAGES:
            var newMessage = {
                id: 7,
                name: state.newMessageTextArea,
            }
            state.messageData.push(newMessage)
            state.newMessageTextArea = '';
            //debugger
            return state;

        case UPDATE_NEW_MESSAGE_TEXT_AREA:
            state.newMessageTextArea = action.newtext;
            return state

        default: return state;
    }

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


export default dialogsReducer