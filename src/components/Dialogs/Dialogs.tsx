import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType, RootStateType, StoreType} from "../../redux/store";

export type DialogsType = {
    updateNewMessageBody: (body: string) => void,
    sendMessage: () => void,
    dialogPage: DialogPageType,
}

export const Dialogs = (props: DialogsType) => {
    let state = props.dialogPage;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
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

