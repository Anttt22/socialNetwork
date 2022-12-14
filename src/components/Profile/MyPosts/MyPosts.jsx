import React from "react";
import Post from './Post/Post'
import k from './MyPosts.module.css'
import {addPostActionCreator, onChangeTextAreaActionCreator} from '../../../redux/profile-reducer'

const MyPosts = (props) => {

  let postElements =
   props.pd.map(elem => (<Post message={elem.message} like={elem.like} />))

  let newPost_r = React.createRef()

  let onAddPost = () => {
    props.addPost();
    //props.dispatch(addPostActionCreator())
  }

  let onChangeTextArea = () => {
    let text = newPost_r.current.value;
    //props.dispatch(onChangeTextAreaActionCreator(text));
    props.updateNewPostTextArea(text)
  }

  return (

    <div className={k.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div><textarea ref={newPost_r} onChange={onChangeTextArea} value={props.nTextD} /></div>
        <div><button onClick={onAddPost}>Add post</button></div>
      </div>

      <div className={k.item}>
        {postElements}
      </div>

    </div>

  )
}

export default MyPosts