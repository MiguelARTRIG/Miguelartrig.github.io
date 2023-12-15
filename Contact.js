import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contato = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k7qhw5n', 'template_pb5s00r', form.current, 'eX-qI3NTdpGEP5YEc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='form' ref={form} onSubmit={sendEmail}>
      <label>Nome</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Mensagem</label>
      <textarea name="message" />
      <input className='btnContact' type="submit" value="Enviar" />
    </form>
  );
};