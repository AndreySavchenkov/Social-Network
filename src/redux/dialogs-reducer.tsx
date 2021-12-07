import {addPostAC, updateNewPostTextAC} from "./profile-reducer";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>

export type DialogPageType = {
    messages: Array<MessageType>,
    dialogs: Array<DialogType>,
    newMessageBody: string,
}
export type MessageType = {
    id: number,
    message: string,
}
export type DialogType = {
    id: number,
    name: string,
}


let initialState: DialogPageType = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I want to work'},
        {id: 4, message: "I'm fine"},
        {id: 5, message: "It's god!"},
    ],
    dialogs: [
        {id: 1, name: 'Dimuch'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Zina'},
        {id: 4, name: 'Ira'},
        {id: 5, name: 'Marat'},
    ],
    newMessageBody: '',
}

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes): DialogPageType => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
                newMessageBody: '',
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const);
export const updateNewMessageBodyCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const);