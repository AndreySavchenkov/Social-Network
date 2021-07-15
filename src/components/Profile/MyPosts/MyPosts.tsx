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

    let newPostElement: any = React.createRef();


    let addPost = () => {
        debugger;
        let text: any = newPostElement.current.value;
        alert(text)
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