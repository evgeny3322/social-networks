import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
            <NavLink className={navData => navData.isActive ? s.activeLink:s.item} to="/profile">
                Profile
            </NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink className={navData => navData.isActive ? s.activeLink:s.item} to="/dialogs">
                Messages
            </NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a className={s.val}>
                News
            </a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a className={s.val}>
                Music
            </a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a className={s.val}>
                Settings
            </a>
        </div>
    </nav>
}


export default Navbar;