import React from 'react';
import s from './Header.module.css';


const Header = () => {
    return <header className={s.header}>
        <img className={s.header_photo} src='https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png' alt=""/>
    </header>
}

export default Header;