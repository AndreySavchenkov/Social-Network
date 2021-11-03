import {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogsReducer";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type usersReducerActionsTypes = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>


export type usersType = {
    users: Array<userType>
}

export type userType = {
    id: number,
    fullName: string,
    status: string,
    followed: boolean,
    location: userLocationType,
}

export type userLocationType = {
    country: string,
    city: string,
}

let initialState: usersType = {
    users: [
        // {
        //     id: 1,
        //     fullName: "Andrey",
        //     status: 'I am a boss',
        //     followed: true,
        //     location: {country: 'Belarus', city: 'Grodno',}
        // },
        // {
        //     id: 2,
        //     fullName: "Sasha",
        //     status: 'I am a boss too',
        //     followed: false,
        //     location: {country: 'Russia', city: 'Moscow',}
        // },
        // {
        //     id: 3,
        //     fullName: "Masha",
        //     status: 'I am a boss too',
        //     followed: true,
        //     location: {country: 'Poland', city: 'Warsaw',}
        // },
        // {
        //     id: 4,
        //     fullName: "Dima",
        //     status: 'I am a boss too',
        //     followed: false,
        //     location: {country: 'Ukraine', city: 'Kiev',}
        // },

    ],
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
        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<userType>) => ({type: SET_USERS, users} as const)
