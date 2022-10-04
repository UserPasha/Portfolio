import React from 'react';
import c from './Skill.module.scss'


const Skill = (props) => {
    return (
        <div className={c.skillWrapper}>
            <div className={c.icon}>
               <img src={props.src} />
            </div>
            <h3 className={c.skillTitle}>
                {props.title}
            </h3>
        </div>
    );
};

export default Skill;