import React from 'react';
import c from './Footer.module.css'
import cont from "../../Common/Styles/Container.module.css";

const Footer = () => {
    return (
        <div className={c.footerWrapper}>
            <h3 className={c.footerTitle}>Pavel Romanovich</h3>
<div className={`${cont.container} ${c.container}`}>
    <div className={c.item}></div>
    <div className={c.item}></div>
    <div className={c.item}></div>
    <div className={c.item}></div>
    <div className={c.item}></div>
    <div className={c.item}></div>
    <div className={c.item}></div>
</div>
            <h4 className={c.footerTitle}>All rights reserved </h4>
        </div>
    );
};

export default Footer;