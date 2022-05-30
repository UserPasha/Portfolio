import React from 'react';
import c from "./works.module.css";
import cont from "./../../../Common/Styles/Container.module.css"
import Project from "./Project/Project";

const Works = () => {
    return (
        <div className={c.worksWrapper}>
            <div className={`${cont.container} ${c.worksContainer}`}>
                <h2>My Projects</h2>
                <div className={c.projects}>
                    <Project name={"Project One"} description={"lorem is Lorem ipsum dolor sit amet consectetur" +
                        " adipisicing elit. Aliquid, similique."}/>
                    <Project name={"Project Two"} description={"lorem is Lorem ipsum dolor sit amet consectetur" +
                        " adipisicing elit. Aliquid, similique."}/>
                </div>
            </div>
        </div>
    );
};

export default Works;