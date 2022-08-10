import React from 'react';
import c from "./Skills.module.scss";
import cont from "../../../Common/Styles/Container.module.scss"
import Skill from "./Skill/Skill";
import Title from "../../../Common/Components/Title";
import htmlIcon from "./../../../assets/image/Html.svg"
import cssIcon from "./../../../assets/image/Css.svg"
import reactIcon from "./../../../assets/image/React.svg"


const Skills = () => {
    return (
        <div className={c.skillsWrapper}>
            <div className={`${cont.container} ${c.skillsContainer}`}>
                <Title text={"My Skills"}/>

                <div className={c.skills}>

                    <Skill title={'HTML'} src={htmlIcon} description={"lorem is Lorem ipsum dolor sit amet consectetur" +
                        " adipisicing elit. Aliquid, similique.Lorem ipsum dolor sit amet, consectetur " +
                        "adipisicing elit. Laudantium natus dignissimos nesciunt harum eveniet dolore esse,"} />
                    <Skill title={'CSS'} src={cssIcon} description={"lorem is Lorem ipsum dolor sit amet consectetur" +
                        " adipisicing elit. Aliquid, similique.Lorem ipsum dolor sit amet, consectetur " +
                        "adipisicing elit. Laudantium natus dignissimos nesciunt harum eveniet dolore esse,"}/>
                    <Skill title={'REACT'} src={reactIcon} description={"lorem is Lorem ipsum dolor sit amet consectetur" +
                        " adipisicing elit. Aliquid, similique.Lorem ipsum dolor sit amet, consectetur " +
                        "adipisicing elit. Laudantium natus dignissimos nesciunt harum eveniet dolore esse,"}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;