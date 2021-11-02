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

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hello everybody!!!)", likesCount: 12},
        {id: 2, message: "Yeah!", likesCount: 16},
        {id: 3, message: "Zzzzz...", likesCount: 2},
        {id: 4, message: "You're interesting man but I want to sleep", likesCount: 10},
        {id: 5, message: "It's my first post", likesCount: 22},
    ],
    newPostText: 'it-camasutra.com'
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        default:
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST} as const);
export const updateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const);