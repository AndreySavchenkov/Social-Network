import React from "react";
import s from './Post.module.css';

type postPropsType = {
    message:string,
    likesCount: string
}

const Post = (props:postPropsType) => {

    return (
        <div className={s.item}>
            <img src="https://www.vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg" alt=""/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;