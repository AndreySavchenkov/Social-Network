import React, {useEffect} from "react";
import Header from "./Header";
import {authReducerActionsTypes, getAuthUserData} from "../../redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../../redux/selectors";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../redux/redux-store";

type AppDispatch = ThunkDispatch<AppStateType, any, authReducerActionsTypes>

export const HeaderContainer: React.FC = () => {

    const dispatch:AppDispatch = useDispatch();

    const {
        isAuth,
        login,
    } = useSelector(auth)

    useEffect(() => {
        dispatch(getAuthUserData())
    }, [])

    return (
        <Header login={login} isAuth={isAuth}/>
    );
}



