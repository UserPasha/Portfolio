import React, {useState} from 'react';
import Title from "../../../../Common/Components/Title";
import Fade from "react-reveal/Fade";
import {useForm} from "react-hook-form";
import axios from "axios";
import style from './Form.module.scss'

export const Form = ({setIsSent}) => {
    const [isDisabled, setIsDisabled] = useState(false)
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = (data) =>{
        setIsDisabled(true)
        axios.post('https://smtp-ser-ver-for.herokuapp.com/sendMessage', {data})
            .then(()=>{
                setIsDisabled(false)
                setIsSent(true)
            })
        reset()
    }
    return (
      <>
          <Fade bottom>

              <Title text={"Contacts"}/>

              <form onSubmit={handleSubmit(onSubmit)} className={style.contactsForm}>
                  <input type="text" placeholder="Name" {...register('Name')}/>
                  <input type="text" placeholder="Email" {...register('Email')}/>
                  <textarea placeholder="Write your message" {...register('Message')}/>

                  <button type="submit" disabled={isDisabled}>Send</button>

              </form>

          </Fade>
      </>
    );
};

