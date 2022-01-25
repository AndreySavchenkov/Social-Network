import {sendMessageCreator} from "./dialogs-reducer";
import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {AppStateType} from "./redux-store";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

export type ProfileActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>

export type ProfilePageType = {
    posts: Array<PostType>,
    newPostText: string,
    profile: ProfileType,
    status: string,
}
export type PostType = {
    id: number,
    message: string,
    likesCount: number,
}
export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null,
        github: string,
        mainLink: null
    },
    lookingForAJob: true,
    lookingForAJobDescription: string,
    fullName: string,
    userId: string,
    photos: {
        small: string,
        large: string
    }
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "It's my first post", likesCount: 722},
        {id: 2, message: "I love eating pizza and drinking Coca Cola!!!!111", likesCount: 312},
    ],
    newPostText: 'it-camasutra.com',
    profile: {
        aboutMe: "I'm man",
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
        fullName: "Andrew Savchenkov",
        userId: "19640",
        photos: {
            small: "",
            large: ""
        },
    },
    status: '',
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.values,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((p) => p.id !== action.postId),
            }
        default:
            return state;
    }
}

export const addPostAC = (values: string) => ({type: ADD_POST, values} as const);
export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile} as const);
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const);
export const deletePost = (postId: number) => ({type: DELETE_POST, postId} as const);

type DispatchType = Dispatch<ProfileActionsTypes>
type GetStateType = () => AppStateType

export const getUserProfile = (userId: string) => (dispatch: DispatchType, getState: GetStateType) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const getStatus = (userId: string) => (dispatch: DispatchType) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateStatus = (status: string) => (dispatch: DispatchType) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
}