import {addPostAC} from "./profile-reducer";

const SEND_MESSAGE = 'SEND_MESSAGE';

export type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageCreator>


export type DialogPageType = {
    messages: Array<MessageType>,
    dialogs: Array<DialogType>,
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
        {id: 1, name: 'Leonardo '},
        {id: 2, name: 'Donatello'},
        {id: 3, name: 'Raphael '},
        {id: 4, name: 'Michaelangelo '},
        {id: 5, name: 'Splinter'},
    ],
}

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes): DialogPageType => {


    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.values}],
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (values: string) => ({type: SEND_MESSAGE, values} as const);
