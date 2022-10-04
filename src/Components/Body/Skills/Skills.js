import React from 'react';
import c from "./Skills.module.scss";
import cont from "../../../Common/Styles/Container.module.scss"
import Skill from "./Skill/Skill";
import Title from "../../../Common/Components/Title";
import htmlIcon from "./../../../assets/image/Html.svg"
import cssIcon from "./../../../assets/image/Css.svg"
import reactIcon from "./../../../assets/image/React.svg"
import JS from "./../../../assets/image/JavaScript.png"
import TS from "./../../../assets/image/TypeScript.png"
import Redux from "./../../../assets/image/Redux.png"
import Git from "./../../../assets/image/github.png"
import Sass from "./../../../assets/image/sass-1-logo.png"
import API from "./../../../assets/image/rest-api-icon.png"
import MUI from "./../../../assets/image/MUIlogo.png"
import Fade from 'react-reveal/Fade';


const Skills = () => {
    return (
        <div className={c.skillsWrapper} id='skills'>
            <div className={`${cont.container} ${c.skillsContainer}`}>
                <Fade bottom>
                    <Title text={"My Skills"}/>

                    <div className={c.skills}>

                        <Skill title={'HTML'} src={htmlIcon}/>
                        <Skill title={'CSS'} src={cssIcon}/>
                        <Skill title={'SASS'} src={Sass}/>
                        <Skill title={'JavaScript'} src={JS}/>
                        <Skill title={'TypeScript'} src={TS}/>
                        <Skill title={'React'} src={reactIcon}/>
                        <Skill title={'Redux'} src={Redux}/>
                        <Skill title={'Git'} src={Git}/>
                        <Skill title={'REST API'} src={API}/>
                        <Skill title={'MUI'} src={MUI}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Skills;