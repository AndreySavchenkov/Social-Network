import {ActionsTypes, DialogPageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState =  {
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

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body})
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const);
export const updateNewMessageBodyCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const);