import React from "react";
import s from './NameFriend.module.css';

let NameFriend = (props: any) => {
    return (
            <span className={s.name}>{props.name}</span>
        )
};

export default  NameFriend;