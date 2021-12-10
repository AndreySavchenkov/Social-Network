import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {AppStateType} from "../../../redux/redux-store";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {addPostAC, ProfileActionsTypes, updateNewPostTextAC} from "../../../redux/profile-reducer";




const MyPosts: React.FC = () => {

    const state = (state:AppStateType) => state.profilePage

    const {
        posts,
        newPostText
    } = useSelector(state)

    const dispatch = useDispatch<Dispatch<ProfileActionsTypes>>()

    let postsElements = posts.map((p: { message: string; likesCount: number; }) => <Post message={p.message}
                                                                                               likesCount={p.likesCount}/>)
    let newPostElement: any = React.createRef();

    let onAddPost = () => {
        dispatch(addPostAC());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        dispatch(updateNewPostTextAC(text));
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={newPostText}/>
            </div>
            <button onClick={onAddPost}>Add Post</button>
            <div>
                <h3>New post</h3>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;