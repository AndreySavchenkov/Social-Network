import React, {FC, memo} from "react";
import s from './Message.module.scss'


type messagePropsType = {
    message: string
}

export const Message: FC<messagePropsType> = memo((props) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    )
})



