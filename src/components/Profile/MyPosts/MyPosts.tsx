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

const MyPosts = (props: any) => {
    

    let postsElements = props.posts.map((p: { message: string; likesCount: number; }) => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement: any = React.createRef();


    let addPost = () => {

        let text: any = newPostElement.current.value;
        props.addPost(text);
    }



    return (

        <div className={s.postsBlock}>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <button onClick={ addPost }>Add Post</button>
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