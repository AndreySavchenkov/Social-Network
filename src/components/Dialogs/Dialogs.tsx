import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'

type dialogItemPropsType = {
    name: string,
    id: number
}

const DialogItem = (props: dialogItemPropsType) => {

    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type messagePropsType = {
    message: string
}

const Message = (props: messagePropsType) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    )
};

const Dialogs = (props: any) => {

    let dialogs = [
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
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)

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