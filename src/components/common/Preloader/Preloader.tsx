import React, {FC, memo} from "react";
import preloader from "../../../assets/images/preloader.svg";
import style from './Preloader.module.scss'

export const Preloader: FC = memo(() => {
    return <div className={style.wrapper}>
        <img src={preloader} alt={'picture show when download app'}/>
    </div>
})