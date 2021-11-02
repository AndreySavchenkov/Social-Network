import {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogsReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>

export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string,
}
export type PostType = {
    id: number,
    message: string,
    likesCount: number,
}

let initialState: any = {
    users: [
        {id: 1, fullName: "Andrey", status: 'I am a boss', follow: true, location: {country: 'Belarus', city: 'Grodno',},  linkPhoto: ''},
        {id: 2, fullName: "Sasha", status: 'I am a boss too', follow: true, location: {country: 'Russia', city: 'Moscow',},  linkPhoto: ''},
        {id: 3, fullName: "Masha", status: 'I am a boss too', follow: true, location: {country: 'Poland', city: 'Warsaw',},  linkPhoto: ''},
        {id: 4, fullName: "Dima", status: 'I am a boss too', follow: true, location: {country: 'Ukraine', city: 'Kiev',},  linkPhoto: ''},

    ],
    newPostText: 'it-kamasutra.com'
}

export const usersReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST} as const);
export const updateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const);