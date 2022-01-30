import React, {FC, memo} from "react";
import styles from "./users.module.scss";
import {fiterType, usersReducerActionsTypes, userType} from "../../redux/users-reducer";
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../redux/redux-store";
import {UsersSearchForm} from "./UsersSearchForm";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

export type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: userType[]
    followingInProgress: number[]
    onPageChanged: (pageNumber: number) => void
    onFilterChanged: (filter: fiterType) => void
}

export const Users: FC<UsersType> = memo(({pageSize,currentPage,onPageChanged, totalUsersCount, followingInProgress,...props}) => {

    type appDispatch = ThunkDispatch<AppStateType, any, usersReducerActionsTypes>
    const thunkDispatch: appDispatch = useDispatch();

    return (
        <div className={styles.usersContainer}>
            <UsersSearchForm onFilterChanged={props.onFilterChanged} />

           <Paginator currentPage={currentPage}
                      onPageChanged={onPageChanged}
                      totalUsersCount={totalUsersCount}
                      pageSize={pageSize}/>

            <div className={styles.usersWithServer}>
                {
                    props.users.map((u => <User key={u.id} user={u} followingInProgress={followingInProgress}/>))
                }
            </div>
        </div>
    )
})



