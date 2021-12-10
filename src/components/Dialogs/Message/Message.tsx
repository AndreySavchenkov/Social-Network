import React from "react";
import s from './Message.module.css'


type messagePropsType = {
    message: string
}

export const Message: React.FC<messagePropsType> = (props) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    )
};



