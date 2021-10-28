import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../storeContext";


export const DialogsContainer = () => {


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

