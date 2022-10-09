import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import Post from './Post/Post'
import k from './MyPosts.module.css'

const MyPosts = () => {
  return (
    <div>
      <div>
        <textarea></textarea>
        <button>Add post</button>
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