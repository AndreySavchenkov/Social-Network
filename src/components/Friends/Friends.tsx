import React, {useLayoutEffect} from "react";
import s from './Friends.module.css';
import NameFriend from "./NameFriend/NameFriend";
import {friendsList} from "../../redux/state";




export const Friends = (props: any) => {


    let friendsItems = props.name.map((n:any) => <NameFriend name={n.name}/>);



    return(
        <div>
            <h3 className={s.title}>Friends</h3>
            {friendsItems}
        </div>

    )
};
