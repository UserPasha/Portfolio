import React from 'react';
import c from "./Project.module.scss"


const Project = (props) => {
    return (
        <div className={c.projectWrapper}>

            <div className={c.imageHolder} style={props.style}>
                <a href={props.link} target={'_blank'}>
                <button>View</button>
                </a>
                <a href={props.code} target={'_blank'}>
                    <button>Code</button>
                </a>
            </div>
            <div className={c.projectDescription}>
            <h3 className={c.title}>{props.name}</h3>
            <span className={c.description}> {props.description}</span>
            </div>
        </div>
    );
};

export default Project;