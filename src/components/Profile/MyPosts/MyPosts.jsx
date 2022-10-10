import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import Post from './Post/Post'
import k from './MyPosts.module.css'

const MyPosts = (props) => {
  return (
    <div className={k.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div><textarea></textarea></div>
        <div><button>Add post</button></div> 
      </div>
      <div className={k.item}>
        <Post message='holla' like ='12' />
        <Post message='how is life' like ='56'/>
        <Post message='yop' like ='4'/>
      </div>

    </div>


  )
}

export default MyPosts