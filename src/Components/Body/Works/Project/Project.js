import React from 'react';
import c from "./Project.module.css"

const Project = (props) => {
    return (
        <div className={c.projectWrapper}>

                <button>Watch</button>


                <h3 className={c.title}>{props.name}</h3>
               <span className={c.description}> {props.description}</span>

        </div>
    );
};

export default Project;