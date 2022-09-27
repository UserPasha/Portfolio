import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Body/Skills/Skills";
import Works from "./Components/Body/Works/Works";
import AboutMe from "./Components/Body/AboutMe/AboutMe";
import Contacts from "./Components/Body/Contacts/Contacts";
import common from './Common/Styles/Parallax.module.scss'
import burger from './Common/Styles/SetBurger.module.scss'
import {Quote} from "./Common/Components/Quote/Quote";
import React from "react";
import {Menu} from "./Components/Header/Menu";
function App() {
    return (
        <div className="App">
            <div className={common.wrapper}>
                <div className={`${common.item} ${common.components}`}>
                   <Header/>
                    <div className={burger.open}>
                        <Menu/>
                    </div>

                    <AboutMe/>
                </div>
                <div className={common.layers}>

                    <div className={`${common.item} ${common.firstLayer}`}>

                        <Quote title={'Any fool can write code that a machine can understand. Good programmers write code that humans can understand'}
                               author={'Martin Fowler'}/>

                    </div>

                </div>
                <div className={`${common.item} ${common.components}`}>
                   <Skills />
                </div>
                <div className={common.layers}>

                    <div className={`${common.item} ${common.secondLayer}`}>

                        <Quote title={'Programming is a breakdown of something big and impossible into something small and quite real'}
                               author={'Jazzwant'}/>

                    </div>
                </div>
                <div className={`${common.item} ${common.components}`}>
                   <Works/>
                </div>
                <div className={common.layers}>

                    <div className={`${common.item} ${common.thirdLayer}`}>

                        <Quote title={'To write clean code, we first write dirty code and then refactor it'}
                               author={'Robert Martin'}/>

                    </div>

                </div>
                <div className={`${common.item} ${common.components}`}>
                   <Contacts/>
                    <Footer/>
                </div>


            </div>


        </div>
    );
}

export default App;
