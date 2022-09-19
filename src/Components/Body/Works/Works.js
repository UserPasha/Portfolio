import React from 'react';
import c from "./works.module.scss";
import cont from "../../../Common/Styles/Container.module.scss"
import Project from "./Project/Project";
import Title from "../../../Common/Components/Title";
import socialImg from "./../../../assets/image/social.png"
import todoImg from "./../../../assets/image/todo.png"
import Fade from 'react-reveal/Fade';

const Works = () => {
    const social = {
        backgroundImage: `url(${socialImg})`
    }
    const todoList = {
        backgroundImage: `url(${todoImg})`
    }
    return (
        <div className={c.worksWrapper} id='works'>
            <div className={`${cont.container} ${c.worksContainer}`}>
                <Fade bottom>
                    <Title text={"My Projects"}/>

                    <div className={c.projects}>
                        <Project style={social} name={"Social Network"}
                                 description={"lorem is Lorem ipsum dolor sit amet consectetur" +
                                     " adipisicing elit. Aliquid, similique."}/>
                        <Project style={todoList} name={"Todolist App"}
                                 description={"lorem is Lorem ipsum dolor sit amet consectetur" +
                                     " adipisicing elit. Aliquid, similique."}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Works;