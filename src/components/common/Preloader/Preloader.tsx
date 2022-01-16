import React from "react";
import preloader from "../../../assets/images/preloader.svg";
import style from './Preloader.module.scss'

export const Preloader: React.FC = React.memo(() => {
    return <div className={style.wrapper}>
        <img src={preloader} alt={'picture show when download app'}/>
    </div>
})