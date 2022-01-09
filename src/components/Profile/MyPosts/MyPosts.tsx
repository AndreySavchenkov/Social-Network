import React from "react";
import s from './MyPosts.module.scss';
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
            <div className={s.createMessageBlock}>
                <textarea onChange={onPostChange} ref={newPostElement} value={newPostText}/>
                <button onClick={onAddPost}>Post</button>
            </div>
            <h3 className={s.title}>My Little Posts:</h3>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;