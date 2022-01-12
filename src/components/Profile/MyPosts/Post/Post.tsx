import React from "react";
import s from './Post.module.scss';
import avatar from './../../../../assets/images/avatarForMessage.jpeg'
import heart from './../../../../assets/images/heart.png'

type postPropsType = {
    message:string,
    likesCount: number
}

const Post: React.FC<postPropsType> = React.memo((props) => {

    return (
        <div className={s.item}>
            <div className={s.textContainer}>
                <img src={avatar} alt=""/>
                <div className={s.text}>
                    {props.message}
                </div>
            </div>
            <div className={s.likeContainer}>
                <span> {props.likesCount} </span> <img src={heart} alt=""/>
            </div>
        </div>
    );
})

export default Post;