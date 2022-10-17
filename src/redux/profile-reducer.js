const ADD_POST = 'ADD_POSTS'
const UPDATE_NEW_POST_TEXT_AREA = 'UPDATE_NEW_POST_TEXT_AREA'


const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newpost = {
                id: 5,
                message: state.newPostTextArea,
                like: 0
            }
            state.postData.push(newpost)
            state.newPostTextArea = '';

            return state

        case UPDATE_NEW_POST_TEXT_AREA:
            state.newPostTextArea = action.newtext;

            return state
            default:
                return state;
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

export default profileReducer