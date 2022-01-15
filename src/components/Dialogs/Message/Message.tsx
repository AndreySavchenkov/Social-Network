import React from "react";
import s from './Message.module.scss'


type messagePropsType = {
    message: string
}

export const Message: React.FC<messagePropsType> = React.memo((props) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    )
})



