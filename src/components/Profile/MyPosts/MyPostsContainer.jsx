import React from "react";
import Post from './Post/Post'
import k from './MyPosts.module.css'
import {addPostActionCreator, onChangeTextAreaActionCreator} from '../../../redux/profile-reducer'
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
  //debugger
  let state=props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  let onChangeTextArea = (text) => {
    //let text = newPost_r.current.value;
    props.store.dispatch(onChangeTextAreaActionCreator(text));
    //store.updateNewPostTextArea(text)
  }

  return (

   <MyPosts updateNewPostTextArea={onChangeTextArea}
            addPost={addPost}
            pd={state.profilePage.postData}
            nTextD={state.profilePage.newPostTextArea}
            />

  )
}

export default MyPostsContainer