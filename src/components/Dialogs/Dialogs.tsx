import React from "react";
import s from './Dialogs.module.scss'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {useDispatch, useSelector} from "react-redux";
import {compose, Dispatch} from "redux";
import {ActionsTypes, sendMessageCreator} from "../../redux/dialogs-reducer";
import {dialogsPage} from "../../redux/selectors";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {Formik, Form, Field} from 'formik';


export const Dialogs: React.FC = React.memo(() => {

    const dispatch = useDispatch<Dispatch<ActionsTypes>>()

    const {
        messages,
        dialogs,
        // newMessageBody,
    } = useSelector(dialogsPage)


    let onSendMessageClick = (values: string) => {
        dispatch(sendMessageCreator(values))
    }

    let dialogsElements = dialogs.map((d: { name: string; id: number; }) => <DialogItem name={d.name} key={d.id}
                                                                                        id={d.id}/>)
    let messagesElements = messages.map((m: { message: string; }) => <Message message={m.message}/>)

    return (
        <div className={s.wrapper}>
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
            <div >
                <Formik
                    initialValues={{post: ''}}
                    validate={values => {
                    }}
                    onSubmit={(values) => onSendMessageClick(values.post)}
                >
                    {() => (
                        <Form className={s.messageInput}>
                            <Field className={s.area} type="text" name="post" placeholder="Some text"/>
                            <button className={s.button} type="submit">
                                Post
                            </button>
                        </Form>
                    )}
                </Formik>

                {/*<textarea className={s.area}*/}
                {/*          onChange={onNewMessageChange}*/}
                {/*          value={newMessageBody}*/}
                {/*          placeholder='Enter your message...'*/}
                {/*>*/}
                {/*</textarea>*/}
                {/*<button className={s.button} onClick={onSendMessageClick}>Send</button>*/}
            </div>
        </div>

    );
})

export default compose<React.ComponentType>(WithAuthRedirect)(Dialogs);

