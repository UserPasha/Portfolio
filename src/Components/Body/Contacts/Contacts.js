import React from 'react';
import c from "./Contacts.module.scss"
import cont from "../../../Common/Styles/Container.module.scss";
import Title from "../../../Common/Components/Title";


const Contacts = () => {
    return (
        <div className={c.contactsWrapper}>
            <div className={`${cont.container} ${c.contactsContainer}`}>

                <Title text={"Contacts"}/>

                <form className={c.contactsForm}>
                    <input type="text" placeholder={"Name"}/>
                    <input type="text" placeholder={"Email"}/>
                    <textarea placeholder={"Write your message"}/>
                </form>
                <button type={"submit"}>Send</button>
            </div>
        </div>
    );
};

export default Contacts;