import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

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
            <MyPostsContainer/>
        </div>
    );
}
export default Profile;