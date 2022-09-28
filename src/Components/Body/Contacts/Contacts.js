import React, {useState} from 'react';
import c from "./Contacts.module.scss"
import cont from "../../../Common/Styles/Container.module.scss";
import {SendPage} from "./SendPage/SendPage";
import {Form} from "./Form/Form";


const Contacts = () => {

    const [isSent, setIsSent] = useState(false)

    return (
        <div className={c.contactsWrapper} id='contacts'>

            <div className={`${cont.container} ${c.contactsContainer}`}>
                {isSent ?
                    <SendPage />
                    :
                    <Form setIsSent={setIsSent}/>
                }
            </div>

        </div>
    );
};

export default Contacts;