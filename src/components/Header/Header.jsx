import React from 'react';
import s from './Header.module.css';


const Header = () => {
    return <header className={s.header}>
        <img className={s.header_photo} src="logo.svg" alt=""/>
    </header>
}

export default Header;