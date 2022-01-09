import {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {AppStateType} from "./redux-store";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type ProfileActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof setUserProfile>

export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string,
    profile: ProfileType,
}
export type PostType = {
    id: number,
    message: string,
    likesCount: number,
}
export type ProfileType = {
    aboutMe: "",
    contacts: {
        facebook: "",
        website: null,
        vk: "",
        twitter: "",
        instagram: "",
        youtube: null,
        github: "",
        mainLink: null
    },
    lookingForAJob: true,
    lookingForAJobDescription: "",
    fullName: "",
    userId: "",
    photos: {
        small: "",
        large: ""
    }
}
let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "It's my first post", likesCount: 722},
        {id: 2, message: "I love eating pizza and drinking Coca Cola!!!!111", likesCount: 312},
    ],
    newPostText: 'it-camasutra.com',
    profile: {
        aboutMe: "",
        contacts: {
            facebook: "",
            website: null,
            vk: "",
            twitter: "",
            instagram: "",
            youtube: null,
            github: "",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "",
        fullName: "",
        userId: "",
        photos: {
            small: "",
            large: ""
        }
    },
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsTypes):ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
            case SET_USER_PROFILE:

            return {
                ...state,profile: action.profile
            }
        default:
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST} as const);
export const updateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const);
const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile} as const);

type DispatchType = Dispatch<ProfileActionsTypes>
type GetStateType = () => AppStateType

export const getUserProfile = (userId: string) => (dispatch: DispatchType, getState: GetStateType) => {

    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })

}