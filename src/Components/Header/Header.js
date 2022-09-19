import React from 'react';
import c from "./Header.module.scss"
const Header = () => {
    return (
        <div className={c.headerWrapper}>
            <ul className={c.menu}>
                <li><a href="">HOME</a></li>
                <li><a href="#skills">SKILLS</a></li>
                <li><a href="#works">PROJECTS</a></li>
                <li><a href="#contacts">CONTACTS</a></li>
            </ul>
        </div>
    );
};

export default Header;
