import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";






const Profile = () => {

    let posts = [
        {id: 1, message: "Hello everybody!!!)", likesCount: 12},
        {id: 2, message: "Yeah!", likesCount: 16},
        {id: 3, message: "Zzzzz...", likesCount: 2},
        {id: 4, message: "You're interesting man but I want to sleep", likesCount: 10},
        {id: 5, message: "It's my first post", likesCount: 22},
        ]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
}

export default Profile;