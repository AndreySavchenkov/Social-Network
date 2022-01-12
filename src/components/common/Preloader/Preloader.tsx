import React from "react";
import preloader from "../../../assets/images/preloader.svg";

export const Preloader: React.FC = React.memo(() => {
    return <div>
        <img src={preloader} alt={'picture show when download app'}/>
    </div>
})