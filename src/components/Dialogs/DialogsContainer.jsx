import React from "react";
import d from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { onChangeMessageAreaActionCreator } from "../../redux/dialogs-reducer"
import { AddMessageActionCreator } from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs";
import storeContext from "./../../storeContext"

const DialogsContainer = () => {
  //debugger

  return (
    <storeContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage

        let onSendMessageClick = () => {
          store.dispatch(AddMessageActionCreator())
        }

        let onChangeMessageArea = (body) => {
          store.dispatch(onChangeMessageAreaActionCreator(body))
        }

        return (
          <Dialogs addMessage={onSendMessageClick}
            updateNewMessageBody={onChangeMessageArea}
            dialogsPage={state}
          />
        )
      }
      }

    </storeContext.Consumer>
  )
}

export default DialogsContainer

