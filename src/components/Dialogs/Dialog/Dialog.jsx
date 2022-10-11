import React from "react";
import d from './../Dialogs.module.css'
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  const path = "/dialogs/" + props.id
  //debugger;
  return (
    <div className={d.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default Dialog