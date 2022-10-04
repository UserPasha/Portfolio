import React from 'react';
import c from "./AboutMe.module.scss"
import cont from "../../../Common/Styles/Container.module.scss"
import Fade from 'react-reveal/Fade';
import Tilt from "react-tilt";
import photo from './../../../assets/image/photo.jpg'

const AboutMe = () => {
    return (
        <div className={c.aboutMeWrapper}>
            <div className={cont.container}>
                <Fade left>
                    <div className={c.text}>
                        <span>Hi There</span>
                        <h1>I am Pavel</h1>
                        <h1>Romanovich</h1>
                        <p>Frontend Developer</p>
                    </div>
                </Fade>
                <Fade right>
                    <Tilt className='Tilt'  options={{ max : 10 }}>
                    <div className={c.photo}>
                        <img src={photo} alt={'avatar picture'}/>
                    </div>
                    </Tilt>
                </Fade>
            </div>
        </div>
    )
        ;
};

export default AboutMe;