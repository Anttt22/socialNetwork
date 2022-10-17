
const ADD_MESSAGES = 'ADD_MESSAGES'
const UPDATE_NEW_MESSAGE_TEXT_AREA = 'UPDATE_NEW_MESSAGE_TEXT_AREA'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGES:
            var newMessage = {
                id: 7,
                name: state.newMessageTextArea,
            }
            state.messageData.push(newMessage)
            state.newMessageTextArea = '';
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