import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



type profilePropsType = {state:{

        posts: {
            id: number,
            message: string,
            likesCount: number
        }[]
    }

}


const Profile = (props: any) => {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     newPostText={props.state.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;