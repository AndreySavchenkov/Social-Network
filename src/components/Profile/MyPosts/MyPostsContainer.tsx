// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import {addPostAC, PostType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToProps = {
    posts: Array<PostType>,
    newPostText: string,
}

type MapDispatchToProps = {
    updateNewPostText: (text: string) => void,
    addPost:() => void,
}

export type MyPostPropsType = MapStateToProps & MapDispatchToProps;


let mapStateToProps = (state: AppStateType):MapStateToProps => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextAC(text)
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostAC());
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

