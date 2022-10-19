import React from "react";
import Post from './Post/Post'
import k from './MyPosts.module.css'
import { addPostActionCreator, onChangeTextAreaActionCreator } from '../../../redux/profile-reducer'
import MyPosts from "./MyPosts";
import storeContext from "./../../../storeContext"

const MyPostsContainer = () => {
  return (
    <storeContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator())
        }
      
        let onChangeTextArea = (text) => {
          store.dispatch(onChangeTextAreaActionCreator(text)); 
        }

        return <MyPosts updateNewPostTextArea={onChangeTextArea}
          addPost={addPost}
          pd={state.profilePage.postData}
          nTextD={state.profilePage.newPostTextArea}
        />
      }

      }


    </storeContext.Consumer>

  )
}

export default MyPostsContainer