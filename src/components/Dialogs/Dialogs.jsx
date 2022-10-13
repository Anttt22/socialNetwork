import React from "react";
import d from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addMessageS} from './../../redux/state'
import {updateNewMessageTextArea} from './../../redux/state'
import store from '../../redux/state'

const Dialogs = (props) => {
  
  let dialogsElements = props.dD
    .map(elem => (<Dialog id={elem.id} name={elem.name} />))

  let messageElements = props.mD
    .map(elem => (<Message message={elem.name} />))
  
  let addMessage = ()=>{
    store.addMessageS()
  }

  let newMessage_r = React.createRef();

  let onChangeMessageArea =()=>{
    let text=newMessage_r.current.value;
    store.updateNewMessageTextArea(text);
  }
  console.log(props.nMessageD)

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
          <div><textarea ref ={newMessage_r} onChange={onChangeMessageArea} value={props.nMessageD} /></div>
          <div><button onClick={addMessage} >Send Message</button></div>
          
        </div>
      </div>



    </div>


  )
}

export default Dialogs

