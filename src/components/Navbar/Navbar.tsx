import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';
import {Friends} from "../Friends/Friends";
import {FriendsListType} from "../../redux/state";

export type NavbarType = {
    name: Array<FriendsListType>
}

export const Navbar: React.FC<NavbarType> = (props) => {

    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <Friends name={props.name}/>

        </nav>
    );
}

