import React from 'react';
import c from './Footer.module.css'
import cont from "../../Common/Styles/Container.module.css";

const Footer = () => {
    return (
        <div className={c.footerWrapper}>
            <h3>Pavel Romanovich</h3>
<div className={`${cont.container} ${c.container}`}>
    <div className={c.item}></div>
    <div className={c.item}></div>
    <div className={c.item}></div>
    <div className={c.item}></div>
    <div className={c.item}></div>
    <div className={c.item}></div>
    <div className={c.item}></div>
</div>
            <h4>All rights reserved </h4>
        </div>
    );
};

export default Footer;