import React, {FC, memo} from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts/MyPosts";
import style from './Profile.module.scss'

export type ProfileCType = {
    profile: ProfileType,
    status: string
}

export const Profile: FC<ProfileCType> = memo(({profile, status}) => {
    return (
        <div className={style.container}>
            <ProfileInfo profile={profile} status={status}/>
            <MyPosts/>
        </div>
    );
})