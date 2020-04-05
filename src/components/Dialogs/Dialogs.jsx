import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messagesElements = props.dialogsPage.messagesData.map(el => <Message message={el.message}/>)

    let addMessage = () => {
        props.addMessage()
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} placeholder='Enter your message' value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;