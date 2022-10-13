import React from "react";
import d from './Dialog.module.css'
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  const path = "/dialogs/" + props.id
 
  return (
    <div className={d.dialog}>    
      <NavLink className={d.dialog} to={path}>{props.name}</NavLink>
    </div>
  )
}

export default Dialog