import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import Post from './Post/Post'
import k from './MyPosts.module.css'
import {addPostS} from '../../../redux/state'
import {updateNewPostTextArea} from '../../../redux/state'


const MyPosts = (props) => {

  let postElements= props.pd
    .map(elem => (<Post message={elem.message} like={elem.like} />))

    let newPost_r = React.createRef()

    let addPost = ()=>{
      addPostS()
     
    }

    let onChangeTextArea=()=>{
      let text= newPost_r.current.value; 
      updateNewPostTextArea(text)
    }
   
  return (
    
    <div className={k.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div><textarea ref={newPost_r} onChange={onChangeTextArea} value={props.nTextD}/></div>
        <div><button onClick={addPost}>Add post</button></div>
      </div>
      
      <div className={k.item}>
        {postElements}
      </div>

    </div>

  )
}

export default MyPosts