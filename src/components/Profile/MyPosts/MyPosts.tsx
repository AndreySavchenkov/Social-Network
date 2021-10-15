import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, addPostAC, updateNewPostTextAC} from "../../../redux/state";



export type myPostsPropsType = {
    posts: {
        id: number,
        message: string,
        likesCount: number
    }[],
    dispatch(action: ActionsTypes): void,
}



const MyPosts = (props: any) => {


    let postsElements = props.posts.map((p: { message: string; likesCount: number; }) => <Post message={p.message}
                                                                                               likesCount={p.likesCount}/>)

    let newPostElement: any = React.createRef();

    let addPost = () => {
        props.dispatch(addPostAC());
    }

    let onPostChange = () => {

        let text = newPostElement.current.value;
        let action = updateNewPostTextAC(text)
        props.dispatch(action);
    }



    return (

        <div className={s.postsBlock}>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <button onClick={addPost}>Add Post</button>
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