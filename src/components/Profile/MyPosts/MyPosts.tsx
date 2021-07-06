import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: "Hello everybody!!!)", likesCount: 12},
        {id: 2, message: "Yeah!", likesCount: 16},
        {id: 3, message: "Zzzzz...", likesCount: 2},
        {id: 4, message: "You're interesting man but I want to sleep", likesCount: 10},
        {id: 5, message: "It's my first post", likesCount: 22},
    ]

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
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
                <Post message={postData[2].message} likesCount={postData[2].likesCount}/>
                <Post message={postData[3].message} likesCount={postData[3].likesCount}/>
                <Post message={postData[4].message} likesCount={postData[4].likesCount}/>

            </div>
        </div>

    );
}

export default MyPosts;