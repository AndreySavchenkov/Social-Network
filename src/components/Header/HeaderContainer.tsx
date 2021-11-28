import React, {useEffect} from "react";
import Header from "./Header";
import axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer";
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


export const HeaderContainer  = (props: HeaderPropsType) => {
    console.log(props);
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode == 0) {
                    let {id, email,login} = response.data.data;
                    props.setAuthUser(id, email, login)
                }
            });
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

