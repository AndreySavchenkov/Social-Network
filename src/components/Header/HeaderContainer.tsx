import React, {useEffect} from "react";
import Header from "./Header";
import {getAuthUserData, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";



type MapStateToPropsType = {
    isAuth: boolean,
    login: string,
}
type MapDispatchToPropsType ={
    setAuthUser: (id: number, email: string, login: string) => void
}

export type HeaderPropsType = MapStateToPropsType  & MapDispatchToPropsType;


export const HeaderContainer  = (props: any) => {

    useEffect(() => {
       getAuthUserData()
    },[])

    return (
        <Header login={props.login} isAuth={props.isAuth} setAuthUser={props.setAuthUser}/>
    );
}

const MapStateToProps = (state:AppStateType ):MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

let MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setAuthUser: (id: number, email: string, login: string) => {
            dispatch(setAuthUserData(id, email, login));
        },
    }
}

export const HeaderContainerWithConnect = connect (MapStateToProps, MapDispatchToProps)(HeaderContainer)

