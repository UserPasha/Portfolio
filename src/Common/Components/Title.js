import React from 'react';
import c from "./Title.module.scss";

const Title = (props) => {
    return (

            <h2 className={c.title}>
                {props.text}
            </h2>

    );
};

export default Title;