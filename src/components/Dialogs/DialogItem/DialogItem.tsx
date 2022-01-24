import React, {FC, memo} from "react";
import {NavLink} from "react-router-dom";
import s from './../DialogItem/DialogItem.module.scss';

type dialogItemPropsType = {
    name: string,
    id: number
}

export const DialogItem: FC<dialogItemPropsType> = memo((props) => {

    let path = '/dialogs/' + props.id;

    return (
        <nav className={s.dialog}>
            <NavLink activeStyle={{
                fontWeight: "bold",
                color: "#FDFDFF"
            }} to={path}>{props.name}</NavLink>
        </nav>
    )
})


