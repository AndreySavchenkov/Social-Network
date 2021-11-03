import React from "react";
import styles from './users.module.scss'
import {UsersPropsType} from "./UsersContainer";

export const Users = (props: UsersPropsType) => {
    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.photo}/>
                </div>
                <div>
                    <button>Follow</button>
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)}
    </div>
}