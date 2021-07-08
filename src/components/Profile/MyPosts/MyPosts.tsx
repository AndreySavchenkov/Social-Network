import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

type myPostsPropsType = {
    posts: {
        id: number,
        message: string,
        likesCount: number
    }[]
}

const MyPosts = (props: myPostsPropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (

        <div className={s.postsBlock}>
            <div>
                <textarea></textarea>
            </div>
            <button>Add Post</button>
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