import {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogsReducer";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export type usersReducerActionsTypes = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>


export type usersType = {
    users: Array<userType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}

export type userType = {
    id: number,
    photos: photosType,
    name: string,
    status: string,
    followed: boolean,
    location: userLocationType,
}

export type photosType = {
    small?: string,
    large?: string
}

export type userLocationType = {
    country: string,
    city: string,
}

let initialState: usersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 2,
}

export const usersReducer = (state: usersType = initialState, action: usersReducerActionsTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<userType>) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
