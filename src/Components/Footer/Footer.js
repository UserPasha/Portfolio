import React from 'react';
import c from './Footer.module.scss'
import cont from "../../Common/Styles/Container.module.scss";
import linkedIn from './../../assets/image/linkedin.png'
import git from './../../assets/image/github.png'
import vk from './../../assets/image/vk.png'
import telegram from './../../assets/image/telegram.png'

const Footer = () => {
    return (
        <div className={c.footerWrapper}>
            <div className={c.footerTitleWrapper}>
                <h3 className={c.footerTitle}>Pavel Romanovich</h3>
            </div>

            <div className={`${cont.container} ${c.container}`}>
                <div className={c.item}><a href={`https://www.linkedin.com/in/itdevreact`} target={`_blank`}>
                    <img src={linkedIn} alt={'linkedIn'}/>
                </a></div>
                <div className={c.item}><a href={`https://github.com/UserPasha`} target={`_blank`}>
                    <img src={git} alt={'github'}/>
                </a></div>
                <div className={c.item}><a href={`https://vk.com/itdevreact`} target={`_blank`}>
                    <img src={vk} alt={'vk'}/>
                </a></div>
                <div className={c.item}><a href={`https://t.me/ItDevReact`} target={`_blank`}>
                    <img src={telegram} alt={'telegram'}/>
                </a></div>

            </div>
            <div className={c.footerTitleWrapper}>
                <h4 className={c.footerRights}>All rights reserved </h4>
            </div>


        </div>
    );
};

export default Footer;