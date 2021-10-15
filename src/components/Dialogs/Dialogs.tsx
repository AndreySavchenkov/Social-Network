import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageCreator, StoreType, updateNewMessageBodyCreator} from "../../redux/state";

type DialogsPropsType = {
    store: StoreType
}

export const Dialogs = (props: DialogsPropsType) => {

    let state = props.store.getState().dialogPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    let dialogsElements = state.dialogs.map((d: { name: string; id: number; }) => <DialogItem name={d.name}
                                                                                              id={d.id}/>)
    let messagesElements = state.messages.map((m: { message: string; }) => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
            <div className={s.messageInput}>
                <textarea className={s.area}
                          onChange={onNewMessageChange}
                          value={newMessageBody}
                          placeholder='Enter your message...'
                >
                </textarea>
                <button className={s.button} onClick={onSendMessageClick}>Send</button>
            </div>
        </div>

    );
}

