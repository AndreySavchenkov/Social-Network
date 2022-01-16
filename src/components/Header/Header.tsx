import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.scss';
import logoTurtle from './../../assets/images/turtleLogo.svg';
import {useDispatch} from "react-redux";
import {AppDispatch} from "../Profile/ProfileContainer";
import {logout} from "../../redux/auth-reducer";

type HeaderPropsType = {
    login: string | null,
    isAuth: boolean
}

const Header: React.FC<HeaderPropsType> = React.memo((props) => {

    const dispatch:AppDispatch = useDispatch();

    return (
        <header className={s.header}>
            <img
                src={logoTurtle}
                alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button onClick={()=>dispatch(logout())}>Log Out</button></div> :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
})

export default Header;