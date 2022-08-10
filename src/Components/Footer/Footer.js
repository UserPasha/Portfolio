import React from 'react';
import c from './Footer.module.scss'
import cont from "../../Common/Styles/Container.module.scss";

const Footer = () => {
    return (
        <div className={c.footerWrapper}>
            <div className={c.footerTitleWrapper}>
                <h3 className={c.footerTitle}>Pavel Romanovich</h3>
            </div>

            <div className={`${cont.container} ${c.container}`}>
                <div className={c.item}></div>
                <div className={c.item}></div>
                <div className={c.item}></div>
                <div className={c.item}></div>

            </div>
            <div className={c.footerTitleWrapper}>
                <h4 className={c.footerRights}>All rights reserved </h4>
            </div>


        </div>
    );
};

export default Footer;