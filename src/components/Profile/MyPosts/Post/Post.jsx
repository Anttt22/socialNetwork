import React from "react";
import k from './Post.module.css'

const Post = (props) => {

  return (
    <div className={k.item}>
      <img src="https://peopletalk.ru/wp-content/uploads/2016/08/orig_c1d79d70d005da6723cd3252d27b8eea-1024x640.jpg" />
      {props.message}

      <div className={k.likecolor}><span>like </span><span>{props.like}</span></div>

    </div>
  )
}


export default Post