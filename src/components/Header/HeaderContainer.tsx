import React from "react";
import Header from "./Header";
import {useSelector} from "react-redux";
import {auth} from "../../redux/selectors";


export const HeaderContainer: React.FC = React.memo(() => {

    const {
        isAuth,
        login,
    } = useSelector(auth)

    return (
        <Header login={login} isAuth={isAuth}/>
    );
})



