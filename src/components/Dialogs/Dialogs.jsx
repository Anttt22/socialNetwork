import React from "react";
import d from './Dialogs.module.css'
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

const Message = (props) => {
  return (
    <div className={d.message}>
      {props.message}
    </div>
  )
}

const Dialogs = () => {
  return (
    <div className={d.dialogs}>
      <div className={d.dialogItems}>
        <Dialog id="1" name="Vasya" />
        <Dialog id="2" name="Gosha" />
        <Dialog id="3" name="Kiril" />
      </div>

      <div className={d.messageItems}>
        <Message message="hi"/>
        <Message message="how is life"/>
        <Message message="hola"/>
        <Message message="ke pasa maricon"/>
        <Message message="yoyoy"/>
     
      </div>
    </div>

  )
}

export default Dialogs