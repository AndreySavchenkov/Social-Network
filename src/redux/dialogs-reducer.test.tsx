import {addDialog, DialogPageType, dialogsReducer, sendMessageCreator} from "./dialogs-reducer";

let state: DialogPageType = {
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

test(`messages length should be increment`,() => {

    let action = sendMessageCreator('hello world!')

    let newState = dialogsReducer(state, action)

    expect(newState.messages.length).toBe(6)
})

test(`text in new message should be correct`,() => {

    let action = sendMessageCreator('hello world!')

    let newState = dialogsReducer(state, action)

    expect(newState.messages[5].message).toBe('hello world!')
})

test(`dialogs length should be increment`,() => {

    let action = addDialog('Andrew')

    let newState = dialogsReducer(state, action)

    expect(newState.dialogs.length).toBe(6)
})