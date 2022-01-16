import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.scss';
import logoTurtle from './../../assets/images/turtleLogo.svg';

type HeaderPropsType = {
    login: string | null,
    isAuth: boolean
}

const Header: React.FC<HeaderPropsType> = React.memo((props) => {

    return (
        <header className={s.header}>
            <img
                src={logoTurtle}
                alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
})

export default Header;