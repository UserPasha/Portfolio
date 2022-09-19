import React from 'react';


export const Quote = (props) => {
    return (
        <>
                <blockquote>{props.title}<p>{`- ${props.author}`}</p></blockquote>
        </>
    );
};

