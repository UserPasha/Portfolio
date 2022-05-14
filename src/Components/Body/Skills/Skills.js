import React from 'react';
import c from "./Skills.module.css";
import cont from "./../../../Common/Styles/Container.module.css"
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={c.skillsWrapper}>
            <div className={`${cont.container} ${c.skillsContainer}`}>
                <h2 className={c.title}>My Skills</h2>
                <div className={c.skills}>
                    <Skill title={'HTML'}/>
                    <Skill  title={'CSS'}/>
                    <Skill  title={'REACT'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;