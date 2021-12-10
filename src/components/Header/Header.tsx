import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css';

type HeaderPropsType = {
    login: string,
    isAuth: boolean
}

const Header: React.FC<HeaderPropsType> = (props) => {

    return (
        <header className={s.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5vFX9tv64JjrobsjPi_62hz5WBWU0FXjfA&usqp=CAU"
                alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;