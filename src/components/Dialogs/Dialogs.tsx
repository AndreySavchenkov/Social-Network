import React from "react";
import s from './Dialogs.module.css'


const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.dialog + ' ' + s.active}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Alexej
                </div>
                <div className={s.dialog}>
                    Ira
                </div>
                <div className={s.dialog}>
                    Marat
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