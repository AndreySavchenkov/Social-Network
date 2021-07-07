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


const MyPosts = (props:myPostsPropsType) => {

    /*let posts = [
        {id: 1, message: "Hello everybody!!!)", likesCount: 12},
        {id: 2, message: "Yeah!", likesCount: 16},
        {id: 3, message: "Zzzzz...", likesCount: 2},
        {id: 4, message: "You're interesting man but I want to sleep", likesCount: 10},
        {id: 5, message: "It's my first post", likesCount: 22},
    ]*/

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