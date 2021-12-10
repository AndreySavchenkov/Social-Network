import React, {useEffect} from "react";
import Header from "./Header";
import {getAuthUserData} from "../../redux/auth-reducer";
import {useSelector} from "react-redux";
import {auth} from "../../redux/selectors.";


export const HeaderContainer: React.FC = () => {

    const {
        isAuth,
        login,
    } = useSelector(auth)

    useEffect(() => {
        getAuthUserData()
    }, [])

    return (
        <Header login={login} isAuth={isAuth}/>
    );
}



