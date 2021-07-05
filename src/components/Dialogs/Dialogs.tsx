import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'


const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to ='/dialogs/1'>Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to ='/dialogs/2'>Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to ='/dialogs/3'>Leha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to ='/dialogs/4'>Ira</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to ='/dialogs/15'>Marat</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    <div className={s.dialog}>
                        Hi
                    </div>
                    <div className={s.dialog}>
                        How is You?
                    </div>
                    <div className={s.dialog}>
                        I'm fine! )
                    </div>
                    <div className={s.dialog}>
                        Let's go!
                    </div>
                    <div className={s.dialog}>
                        I want your money )
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;