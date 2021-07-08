import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



type profilePropsType = {
    posts: {
        id: number,
        message: string,
        likesCount: number
    }[]
}


const Profile = (props: profilePropsType) => {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
}

export default Profile;