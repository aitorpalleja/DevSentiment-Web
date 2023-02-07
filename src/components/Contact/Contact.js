import './Contact.scss'

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

  const [messageSent, setMessageSent] = useState(false)
  const [messageError, setMessageError] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        console.log("message sent")
        setMessageSent(true)
        setTimeout(function () {
          setMessageSent(false);
        }, 3000);

      }, (error) => {
        console.log(error.text);
        setMessageError(true)
        setTimeout(function () {
          setMessageError(false);
        }, 3000)
      });
  };

  return (
    <div className='contact_container'>
      <div className='contact_title-container'>
        <h3 className='contact_title'>
          <span className='contact_title-text'>
            <span className='contact_title-span'>C</span>ontact
          </span>
        </h3>
      </div>
      <p className='contact_pharagraph'>¡Hola! Si hay gente de la comunidad interesada podemos hacer más grande
        el proyecto, mejorarlo, analizar frameworks, nuevas tecnologías...
        Puede ser divertido para ver los datos a final de año y
        trabajar en equipo. Podéis hablarme aquí o por discord Aitor#7282. ¡Nos vemos!</p>
      <form ref={form} onSubmit={sendEmail}>
        <input className='contact_input' type="text" name="user_name" placeholder='Name' required />
        <input className='contact_input' type="email" name="user_email" placeholder='Email' required />
        <textarea className='contact_input' name="message" placeholder='Message' required />
        <input className='contact_button' type="submit" value="Send" />
      </form>

      {messageSent ? (
        <div className='contact_alert'>

          <div className='contact_alert-good'>Message sent!</div>

        </div>
      ) : (
        <div> </div>
      )}

      {messageError ? (
        <div className='contact_alert'>

          <div className='contact_alert-error'>Error sending the message, try again</div>
        </div>
      ) : (
        <div></div>
      )}



    </div>
  );
}

export default Contact;



