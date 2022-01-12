import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts/MyPosts";
import style from './Profile.module.scss'


export type ProfileCType = {
    profile: ProfileType,
    status: string
}


export const Profile: React.FC<ProfileCType> = React.memo((props) => {

    return (
        <div className={style.container}>
            <ProfileInfo profile={props.profile} status={props.status}/>
            <MyPosts/>
        </div>
    );
})