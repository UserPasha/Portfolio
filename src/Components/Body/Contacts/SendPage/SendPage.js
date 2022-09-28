import React from 'react';
import Fade from "react-reveal/Fade";
import Title from "../../../../Common/Components/Title";
import c from './SendPage.module.scss'

export const SendPage = () => {
    return (
      <>
          <Fade up>
              <Title text={"Your message has been sent"}/>
              <div className={c.send}>
                  Thank you for your interest in my person, I will definitely contact you
              </div>
          </Fade>
      </>
    );
};

