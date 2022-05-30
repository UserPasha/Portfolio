import React from 'react';
import c from "./Project.module.css"

const Project = (props) => {
    return (
        <div className={c.projectWrapper}>
            <div className={c.imageHolder}>
                <button>Watch</button>
            </div>
            <div className={c.projectDescription}>
            <h3 className={c.title}>{props.name}</h3>
            <span className={c.description}> {props.description}</span>
            </div>
        </div>
    );
};

export default Project;