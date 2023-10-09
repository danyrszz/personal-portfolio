'use client'
import './contact.css'
import Footer from '../components/Footer'
import { useGlobalLanguage } from '../context/LanguageContext'
import { useState } from 'react';


export default function Contact() {
  const {language} = useGlobalLanguage();
  const langSelector = (a : string ,b : string) => language==='EN' ? a : b
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  function sendEmail (e : React.SyntheticEvent) {
    e.preventDefault()
    console.log(name, email, message)
  }

  return (
    <>
    <div className='common-title title-white title-decorated title-centered bg-deep-blue'> {langSelector('Reach me out.','Contáctame.')} </div>
    <section className='contact-main'>
      test
      <div className='form-container'>
        <form name='email-contact' className='contact-form' onSubmit={e=>sendEmail(e)}>
          <label form="email-contact"> <input type="text" name="name" value={name} onChange={ e=> setName(e.target.value)}  placeholder={langSelector('Your name', 'Tu nombre')} required /> </label> 
          <label form="email-contact"> <input type="email" name="email" value={email} onChange={e=> setEmail(e.target.value)} placeholder={langSelector('yourmail@domain.com', 'tucorreo@dominio.com')} required/> </label> 
          <label form="email-contact"> <textarea name="message" value={message} onChange={e=> setMessage(e.target.value)} placeholder={langSelector('Tell me something', 'Cuéntame lo que necesitas')} required></textarea> </label>
          <span className='info-tag'>
            {langSelector('*All fields required', '*Todos los campos son requeridos')}
          </span>
          <label form="email-contact" className='submit-lbl'> <input type="submit" value={langSelector('Send', 'Enviar')}/> </label>
        </form>
      </div>
    </section>
    <Footer/>
    </>
  )
}

