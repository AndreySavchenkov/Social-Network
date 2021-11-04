import React from "react";
import styles from './users.module.scss'
import {UsersPropsType} from "./UsersContainer";

export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGb2pAloeJoZ0pYDp0TtfKNvjydz1Fbfq-8g&usqp=CAU',
                fullName: "Andrey",
                status: 'I am a boss',
                followed: true,
                location: {country: 'Belarus', city: 'Grodno',}
            },
            {
                id: 2,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGb2pAloeJoZ0pYDp0TtfKNvjydz1Fbfq-8g&usqp=CAU',
                fullName: "Sasha",
                status: 'I am a boss too',
                followed: false,
                location: {country: 'Russia', city: 'Moscow',}
            },
            {
                id: 3,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGb2pAloeJoZ0pYDp0TtfKNvjydz1Fbfq-8g&usqp=CAU',
                fullName: "Masha",
                status: 'I am a boss too',
                followed: true,
                location: {country: 'Poland', city: 'Warsaw',}
            },
            {
                id: 4,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGb2pAloeJoZ0pYDp0TtfKNvjydz1Fbfq-8g&usqp=CAU',
                fullName: "Dima",
                status: 'I am a boss too',
                followed: false,
                location: {country: 'Ukraine', city: 'Kiev',}
            },

        ])
    }


    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.photo} alt={'avatar'}/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(u.id)}>Follow</button>}
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