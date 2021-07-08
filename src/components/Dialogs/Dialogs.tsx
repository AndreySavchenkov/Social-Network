import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type dialogsPropsType = {
    dialogs: {
        id: number,
        name: string
    }[],
    messages: {
        id: number,
        message: string
    }[]
}

const Dialogs = (props: dialogsPropsType) => {

    /*let dialogs = [
        {id: 1, name: 'Dimuch'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Zina'},
        {id: 4, name: 'Ira'},
        {id: 5, name: 'Marat'},
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I want to work'},
        {id: 4, message: "I'm fine"},
        {id: 5, message: "It's god!"},
    ];*/

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;