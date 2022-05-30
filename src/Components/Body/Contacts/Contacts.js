import React from 'react';
import c from "./Contacts.module.css"
import cont from "../../../Common/Styles/Container.module.css";


const Contacts = () => {
    return (
        <div className={c.contactsWrapper}>
            <div className={`${cont.container} ${c.contactsContainer}`}>
                <h3 className={c.contactsTitle}>Contacts</h3>
                <form className={c.contactsForm}>
                    <input/>
                    <input/>
                    <textarea/>
                </form>
                <button>Send</button>
            </div>
        </div>
    );
};

export default Contacts;