import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Body/Skills/Skills";
import Works from "./Components/Body/Works/Works";
import AboutMe from "./Components/Body/AboutMe/AboutMe";
import Contacts from "./Components/Body/Contacts/Contacts";
import common from './Common/Styles/Parallax.module.scss'
function App() {
    return (
        <div className="App">
            <div className={common.wrapper}>
                <div className={`${common.item} ${common.components}`}>
                   <Header/>
                    <AboutMe/>
                </div>
                <div className={common.layers}>

                    <div className={`${common.item} ${common.firstLayer}`}></div>

                </div>
                <div className={`${common.item} ${common.components}`}>
                   <Skills />
                </div>
                <div className={common.layers}>

                    <div className={`${common.item} ${common.secondLayer}`}></div>
                </div>
                <div className={`${common.item} ${common.components}`}>
                   <Works/>
                </div>
                <div className={common.layers}>

                    <div className={`${common.item} ${common.thirdLayer}`}></div>

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
