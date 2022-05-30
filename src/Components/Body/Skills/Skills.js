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
                    <Skill title={'HTML'} description={"lorem is Lorem ipsum dolor sit amet consectetur" +
                        " adipisicing elit. Aliquid, similique."}/>
                    <Skill title={'CSS'} description={"lorem is Lorem ipsum dolor sit amet consectetur" +
                        " adipisicing elit. Aliquid, similique."}/>
                    <Skill title={'REACT'} description={"lorem is Lorem ipsum dolor sit amet consectetur" +
                        " adipisicing elit. Aliquid, similique."}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;