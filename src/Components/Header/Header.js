import React from 'react';
import c from "./Header.module.css"
const Header = () => {
    return (
        <div className={c.headerWrapper}>
            <ul className={c.menu}>
                <li><a href={""}>HOME</a></li>
                <li><a href={""}>SKILLS</a></li>
                <li><a href={""}>PROJECTS</a></li>
                <li><a href={""}>CONTACTS</a></li>
            </ul>
        </div>
    );
};

export default Header;
