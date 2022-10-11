import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import Post from './Post/Post'
import k from './MyPosts.module.css'

const MyPosts = (props) => {

  let postElements= props.pd
    .map(elem => (<Post message={elem.message} like={elem.like} />))

  return (
    <div className={k.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div><textarea></textarea></div>
        <div><button>Add post</button></div>
      </div>

      <div className={k.item}>
        {postElements}
      </div>

    </div>

  )
}

export default MyPosts