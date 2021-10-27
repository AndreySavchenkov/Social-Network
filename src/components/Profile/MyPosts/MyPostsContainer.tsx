import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import {ActionsTypes} from "../../../redux/store";
import MyPosts from "./MyPosts";



export type myPostsContainerPropsType = {
    posts: {
        id: number,
        message: string,
        likesCount: number
    }[],
    dispatch(action: ActionsTypes): void,
}



export const MyPostsContainer = (props: any) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostAC());
        //props.addPost();
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostTextAC(text)
        props.store.dispatch(action);
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
        />
    );
}

