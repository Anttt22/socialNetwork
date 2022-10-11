import React from "react";
import d from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogsElements = props.dD
  .map(elem => (<Dialog id={elem.id} name={elem.name} />))

  let messageElements = props.mD
  .map(elem => (<Message message={elem.name} />))

  return (
    <div className={d.dialogs}>

      <div className={d.dialogItems}>
        {dialogsElements}
      </div>

      <div className={d.messageItems}>
        {messageElements}
      </div>

    </div>
  )
}

export default Dialogs

