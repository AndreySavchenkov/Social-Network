import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import {StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";

type DialogsContainerPropsType = {
    store: StoreType
}

export const DialogsContainer = (props: any) => {

    let state = props.store.getState().dialogPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogPage={state}
    />
}

