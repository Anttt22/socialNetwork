import React from "react";
import d from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { onChangeMessageAreaActionCreator } from "../../redux/dialogs-reducer"
import { AddMessageActionCreator } from "../../redux/dialogs-reducer"
import DialogsContainer from "./DialogsContainer";

const Dialogs = (props) => {

  let state = props.dialogsPage

  let dialogsElements = props.dialogsPage.dialogsData
    .map(elem => (<Dialog id={elem.id} name={elem.name} />))

  let messageElements = props.dialogsPage.messageData
    .map(elem => (<Message message={elem.name} />))


  let newMessageBody= state.newMessageTextArea
//debugger
  let onSendMessageClick = () => {
    //debugger

    props.addMessage();
  }

  let onChangeMessageArea = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }


  return (
    <div className={d.dialogs}>

      <div className={d.dialogItems}>
        {dialogsElements}
      </div>

      <div>
        <div className={d.messageItems}>
          {messageElements}
        </div>

        <div>
          <div><textarea
            onChange={onChangeMessageArea}
            value={newMessageBody}
            placeholder='enermessage'>
          </textarea>
          </div>
          <div><button onClick={onSendMessageClick} >Send Message</button></div>
        </div>
      </div>



    </div>


  )
}

export default Dialogs

