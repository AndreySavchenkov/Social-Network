import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {useDispatch, useSelector} from "react-redux";
import {compose, Dispatch} from "redux";
import {ActionsTypes, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {dialogsPage} from "../../redux/selectors";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


export const Dialogs: React.FC = React.memo(() => {

    const dispatch = useDispatch<Dispatch<ActionsTypes>>()

    const {
        messages,
        dialogs,
        newMessageBody,
    } = useSelector(dialogsPage)


    let onSendMessageClick = () => {
        dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        dispatch(updateNewMessageBodyCreator(body));
    }

    let dialogsElements = dialogs.map((d: { name: string; id: number; }) => <DialogItem name={d.name} key={d.id}
                                                                                        id={d.id}/>)
    let messagesElements = messages.map((m: { message: string; }) => <Message message={m.message}/>)


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
})

export default compose<React.ComponentType>(WithAuthRedirect)(Dialogs);

