import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'

type dialogItemPropsType = {
    name: string,
    id: string
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem name='Dimuch' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Zina' id='3'/>
                <DialogItem name='Ira' id='4'/>
                <DialogItem name='Marat' id='5'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Yo'/>

            </div>
        </div>
    );
}

export default Dialogs;