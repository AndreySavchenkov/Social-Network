import React from "react";
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.scss';

type dialogItemPropsType = {
    name: string,
    id: number
}

export const DialogItem: React.FC<dialogItemPropsType> = React.memo((props) => {

    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
})


