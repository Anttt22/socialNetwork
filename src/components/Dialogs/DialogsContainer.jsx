import React from "react";
import d from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {onChangeMessageAreaActionCreator} from "../../redux/dialogs-reducer"
import {AddMessageActionCreator} from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  //debugger
  let state=props.store.getState().dialogsPage;

  let onSendMessageClick = ()=>{
    //debugger
    //?
    props.store.dispatch(AddMessageActionCreator())
    
  }
 
  let onChangeMessageArea =(body)=>{
    //let text=newMessage_r.current.value;  
    props.store.dispatch(onChangeMessageAreaActionCreator(body))
    //store.updateNewMessageTextArea(text);
  }
  console.log(props.nMessageD)



  return (
    <Dialogs addMessage={onSendMessageClick}
             updateNewMessageBody={onChangeMessageArea}
             dialogsPage={state}
             />   
  )
}

export default DialogsContainer

