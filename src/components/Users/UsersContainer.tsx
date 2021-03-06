import React, {FC, memo, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {fiterType, requestUsers, usersReducerActionsTypes} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersPage} from "../../redux/selectors";
import {ThunkDispatch} from "redux-thunk";

export const UsersContainer: FC = memo(() => {

    const {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        isFetching,
        followingInProgress,
        filter
    } = useSelector(usersPage)

    type appDispatch = ThunkDispatch<AppStateType, any, usersReducerActionsTypes>

    const thunkDispatch: appDispatch = useDispatch();

    useEffect(() => {
        thunkDispatch(requestUsers(currentPage, pageSize, filter))
    }, [thunkDispatch, currentPage, pageSize, filter])

    const onPageChanged = (pageNumber: number) => {
        thunkDispatch(requestUsers(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: fiterType) => {
        thunkDispatch(requestUsers(1, pageSize, filter))
    }

    return <>
        {isFetching ?
            <Preloader/> : null}
        <Users totalUsersCount={totalUsersCount}
               pageSize={pageSize}
               currentPage={currentPage}
               users={users}
               onPageChanged={onPageChanged}
               followingInProgress={followingInProgress}
               onFilterChanged={onFilterChanged}
        />
    </>
})
