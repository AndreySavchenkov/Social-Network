import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {AppStateType} from "./redux-store";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const SET_FILTER = 'SET_FILTER'

export type usersReducerActionsTypes = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowing>
    | ReturnType<typeof setFilter>


export type usersType = {
    users: Array<userType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>,
    filter: fiterType,
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

export type fiterType = {
    term: string
    friend: null | boolean
}

let initialState: usersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [2,3],
    filter: {
        term: '',
        friend: null as null | boolean
    }
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
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_FILTER:
            return {...state, filter: action.payload}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const follow = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<userType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setFilter = (filter: fiterType) => ({type: SET_FILTER, payload: filter } as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleIsFollowing = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching, userId
} as const)

type DispatchType = Dispatch<usersReducerActionsTypes>
type GetStateType = () => AppStateType

export const getUsers = (currentPage: number, pageSize: number, filter: fiterType) => {
    return (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(toggleIsFetching(true));
        dispatch(setFilter(filter));
        usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const getUnfollow = (userId: number) => {
    return (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(toggleIsFollowing(true, userId))
        usersAPI.unfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollow(userId))
            }
            dispatch(toggleIsFollowing(false, userId))
        })
    }
};

export const getFollow = (userId: number) => {
    return (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(toggleIsFollowing(true, userId))
        usersAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(toggleIsFollowing(false, userId))
        })
    }
}