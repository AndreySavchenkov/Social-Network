import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import {StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../storeContext";

type DialogsContainerPropsType = {
    store: StoreType
}

export const DialogsContainer = (props: any) => {


    return <StoreContext.Consumer>
        {
            (store) => {

                let state = store.getState().dialogPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }

                let onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }

                return <Dialogs updateNewMessageBody={onNewMessageChange}
                                sendMessage={onSendMessageClick}
                                dialogPage={state}
                />
            }
        }
    </StoreContext.Consumer>

}

