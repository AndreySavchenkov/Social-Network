import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";




export type myPostsPropsType = {
    posts: {
        id: number,
        message: string,
        likesCount: number
    }[],
    updateNewPostText: (text: string) => void,
    addPost: () => void,
}



const MyPosts = (props: any) => {
    let postsElements = props.posts.map((p: { message: string; likesCount: number; }) => <Post message={p.message}
                                                                                               likesCount={p.likesCount}/>)
    let newPostElement: any = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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