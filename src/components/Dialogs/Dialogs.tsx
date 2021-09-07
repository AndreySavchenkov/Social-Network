import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type DialogsPropsType = {state : {
        dialogs: {
            id: number,
            name: string
        }[],
        messages: {
            id: number,
            message: string
        }[]
    }

}

export const Dialogs = (props: DialogsPropsType) => {

    let newMessageElement: any = React.createRef();

    let addMessage = () => {
        let textMessage: any = newMessageElement.current.value;
        alert(textMessage);
    }

    let dialogsElements = props.state.dialogs.map((d: { name: string; id: number; }) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map((m: { message: string; }) => <Message message={m.message}/>)

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
                <textarea className={s.area} ref={newMessageElement}></textarea>
                <button className={s.button} onClick={addMessage}>Send Message</button>
            </div>
        </div>

    );
}

