import React from "react";
import styles from "./users.module.scss";
import userPhoto from "../../assets/images/userImage.png";
import {getFollow, getUnfollow, usersReducerActionsTypes, userType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../redux/redux-store";



export type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<userType>
    followingInProgress: Array<number>
    onPageChanged: (pageNumber: number) => void
}

export const Users: React.FC<UsersType> = (props) => {

    const dispatch = useDispatch<Dispatch<usersReducerActionsTypes>>()

    type appDispatch = ThunkDispatch<AppStateType,any,usersReducerActionsTypes>

    const thunkDispatch: appDispatch = useDispatch();

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => <span className={props.currentPage === p ? styles.selectedPage : ''}
                                      onClick={() => {
                                          props.onPageChanged(p)
                                      }}>{p}</span>)}
            </div>
            {props.users.map((u =>
                <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.photo}
                             alt={'avatar'}/>
                    </NavLink>

                </div>
                <div>
                    {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {thunkDispatch(getUnfollow(u.id))}}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {thunkDispatch(getFollow(u.id))}}>Follow</button>}
                </div>
            </span>
                    <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
                </div>))}
        </div>
    )
}