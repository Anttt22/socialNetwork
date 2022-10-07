import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import k from './Profile.module.css'

const Profile = () => {
  return (
    <div className={k.content}>
      <div>
        <img className={k.image} src="https://i.ytimg.com/vi/ZR47ftqIY28/maxresdefault.jpg" />
      </div >
      <div>
        avatar+description
      </div>
      <MyPosts/>
    </div>
  )
}


export default Profile