
import React, {useRef, useState} from 'react'
import '../contact/contact.css'
import { useGlobalLanguage } from '../context/LanguageContext'
import emailjs from '@emailjs/browser';

interface contactProps {setEmailSent : Function}

function ContactForm({setEmailSent} : contactProps) {
  
  const form = useRef<any>()
  const {language} = useGlobalLanguage();
  const [isSending, setIsSending] = useState<boolean>(false)
  const langSelector = (a : string, b : string) => language==='EN' ? a : b

  async function sendEmail (e : React.SyntheticEvent) {
    e.preventDefault()
    setIsSending(true)
    const response = await emailjs.sendForm("service_zg1rkys", 'template_aop493t', form.current, 'vnRNacXRndOgMysFO')
    if(response.status === 200) {
      setEmailSent(true)
      setIsSending(false)
    }else{
      alert(
        langSelector("Sorry, we couldn't send the email. You can write me at daniel_ramirezs@hotmail.com","Lo siento, no pudimos enviar el correo. Puedes escribirme a daniel_ramirezs@hotmail.com")
      )
    }
    setEmailSent(true)
  }
  
  return (
    <div className='form-container'>
      <form ref={form} id='email-contact' className='contact-form' onSubmit={e=>sendEmail(e)}>
        <label form="email-contact"> <input type="text" name="name" placeholder={langSelector('Your name', 'Tu nombre')} required /> </label> 
        <label form="email-contact"> <input type="email" name="email" placeholder={langSelector('yourmail@domain.com', 'tucorreo@dominio.com')} required/> </label> 
        <label form="email-contact"> <textarea name="message" placeholder={langSelector('Tell me something', 'Cuéntame lo que necesitas')} required></textarea> </label>
        <span className='info-tag'>
          {langSelector('*All fields required', '*Todos los campos son requeridos')}
        </span>
        <label form="email-contact" className='submit-lbl'> 
          <input type="submit" value={ !isSending && langSelector('Send', 'Enviar') || langSelector('Sending...', 'Enviando...') } disabled = {isSending &&true}/> 
        </label>
      </form>
    </div>
  )
}

export default ContactForm