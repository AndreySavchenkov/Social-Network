import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts/MyPosts";
import style from './Profile.module.scss'


export type ProfileCType = {
    profile: ProfileType
}


export const Profile: React.FC<ProfileCType> = (props) => {

    return (
        <div className={style.container}>
            <ProfileInfo profile={props.profile}/>
            <MyPosts/>
        </div>
    );
};