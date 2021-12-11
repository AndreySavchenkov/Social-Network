import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {auth} from "../redux/selectors.";
import React, {ComponentType} from "react";

export function WithAuthRedirect  <T>(Component: ComponentType<T>)  {

    let RedirectComponent:React.FC = (props) => {

        const {
            isAuth
        } = useSelector(auth)

        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...props as T}/>
    }

    return RedirectComponent
}