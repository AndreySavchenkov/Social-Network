import React from "react";
import styles from "./users.module.scss";
import userPhoto from "../../assets/images/userImage.png";
import {userType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

export type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<userType>
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void

}

export const Users: React.FC<UsersType> = (props) => {

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
                    {u.followed ? <button onClick={() => {
                            usersAPI.setUnfollow(u.id).then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(u.id)
                                    }
                                })


                        }}>Unfollow</button>
                        : <button onClick={() => {
                            usersAPI.setFollow(u.id).then(response => {
                                if (response.data.resultCode == 0) {
                                    props.follow(u.id)
                                }
                            })
                        }}>Follow</button>}
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