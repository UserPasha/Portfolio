import React from 'react';
import c from "./AboutMe.module.scss"
import cont from "../../../Common/Styles/Container.module.scss"
import common from './../../../Common/Styles/Parallax.module.scss'

const AboutMe = () => {
    return (
        <div className={c.aboutMeWrapper}>
            <div className={cont.container}>
                <div className={c.text}>
                    <span>Hi There</span>
                    <h1>I am Pavel</h1>
                    <h1>Romanovich</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={c.photo}>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;