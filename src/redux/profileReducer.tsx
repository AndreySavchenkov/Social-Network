import {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogsReducer";
import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type ActionsTypes = ReturnType<typeof addPostAC>
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
        {id: 1, message: "Hello everybody!!!)", likesCount: 12},
        {id: 2, message: "Yeah!", likesCount: 16},
        {id: 3, message: "Zzzzz...", likesCount: 2},
        {id: 4, message: "You're interesting man but I want to sleep", likesCount: 10},
        {id: 5, message: "It's my first post", likesCount: 22},
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

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes):ProfilePageType => {
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

export const getUserProfile = (userId: any) => (dispatch: any) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}