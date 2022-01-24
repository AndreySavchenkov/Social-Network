import React, {FC, memo} from "react";
import styles from "./users.module.scss";
import userPhoto from "../../assets/images/userImage.png";
import {fiterType, getFollow, getUnfollow, usersReducerActionsTypes, userType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../redux/redux-store";
import {UsersSearchForm} from "./UsersSearchForm";

export type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: userType[]
    followingInProgress: number[]
    onPageChanged: (pageNumber: number) => void
    onFilterChanged: (filter: fiterType) => void
}

export const Users: FC<UsersType> = memo((props) => {

    type appDispatch = ThunkDispatch<AppStateType, any, usersReducerActionsTypes>

    const thunkDispatch: appDispatch = useDispatch();

    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    //pagesCount (i <= pagesCount)
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }


    return (
        <div className={styles.usersContainer}>
            <UsersSearchForm onFilterChanged={props.onFilterChanged}/>

            <div className={styles.usersNumbersPages}>
                {pages.map(p => <div className={props.currentPage === p ? styles.selectedPage : ''}
                                     onClick={() => {
                                         props.onPageChanged(p)
                                     }}>{p}</div>)}
            </div>

            <div className={styles.usersWithServer}>
                {
                    props.users.map((u =>
                        <div className={styles.userWithServer} key={u.id}>
                            <div className={styles.containerPhotoFollow}>
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                             className={styles.photo}
                                             alt={'avatar'}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                          onClick={() => {
                                                              thunkDispatch(getUnfollow(u.id))
                                                          }}>Unfollow</button>
                                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                  onClick={() => {
                                                      thunkDispatch(getFollow(u.id))
                                                  }}>Follow</button>}
                                </div>
                            </div>
                            <div className={styles.containerInfo}>
                                <div className={styles.name}><span>Name: </span>{u.name}</div>
                                <div className={styles.status}><span>Status: </span>{u.status}</div>
                            </div>
                        </div>))
                }
            </div>
        </div>
    )
})



