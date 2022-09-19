import React, {useState} from 'react';
import burger from './Menu.module.scss'
import active from './Active.module.scss'

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const OpenMenu = () =>{
        setIsOpen(!isOpen)
    }
    return <>
        {isOpen ?
            (     <div className={burger.nav}>
                <div className={burger.toggle}>
                    <span onClick={OpenMenu}></span>
                </div>
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="#works">PROJECTS</a></li>
                    <li><a href="#contacts">CONTACTS</a></li>
                </ul>
            </div>)
            : (

            <div className={active.nav}>
            <div className={active.toggle}>
            <span onClick={OpenMenu}></span>
            </div>
        {/*<ul>*/}
        {/*    <li><a href="">HOME</a></li>*/}
        {/*    <li><a href="#skills">SKILLS</a></li>*/}
        {/*    <li><a href="#works">PROJECTS</a></li>*/}
        {/*    <li><a href="#contacts">CONTACTS</a></li>*/}
        {/*</ul>*/}
            </div>)
        }
    </>
        ;
};

