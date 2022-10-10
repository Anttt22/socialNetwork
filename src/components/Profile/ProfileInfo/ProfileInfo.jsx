import React from "react";
import k from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <div>
      <div><img className={k.image} src="https://i.ytimg.com/vi/ZR47ftqIY28/maxresdefault.jpg" /></div>
      <div ClassName={k.descriptionBlock}>avatar+description</div>
    </div>
  )
}


export default ProfileInfo;