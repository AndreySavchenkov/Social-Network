import React, {FC, memo} from "react";
import styles from "./users.module.scss";
import userPhoto from "../../assets/images/userImage.png";
import {getFollow, getUnfollow, usersReducerActionsTypes, userType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../redux/redux-store";

export type UserType = {
    user: userType
    followingInProgress: number[]
}

export const User: FC<UserType> = memo(({user, followingInProgress}) => {
    let u = user

    type appDispatch = ThunkDispatch<AppStateType, any, usersReducerActionsTypes>
    const thunkDispatch: appDispatch = useDispatch();

    return (


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
                    {u.followed ? <button disabled={followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              thunkDispatch(getUnfollow(u.id))
                                          }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      thunkDispatch(getFollow(u.id))
                                  }}>Follow</button>}
                </div>
            </div>
            <div className={styles.containerInfo}>
                <div className={styles.name}><span>Name: </span>{u.name}</div>
                <div className={styles.status}><span>Status: </span>{u.status}</div>
            </div>
        </div>

    )
})



