import React from 'react';
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import Contacts from "./Contacts/Contacts";

const Body = () => {
    return (
        <>
            <AboutMe/>
            <Skills/>
            <Works/>
            <Contacts/>
        </>
    );
};

export default Body;