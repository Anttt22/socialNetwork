import React from "react";
import d from './../Dialogs.module.css'
import { NavLink } from "react-router-dom";


const Message = (props) => {
  return (
    <div className={d.message}>
      {props.message}
    </div>
  )
}

export default Message