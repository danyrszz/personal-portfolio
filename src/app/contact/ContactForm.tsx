
import React, {useRef} from 'react'
import '../contact/contact.css'
import { useGlobalLanguage } from '../context/LanguageContext'
import emailjs from '@emailjs/browser';

interface contactProps {setEmailSent : Function}

function ContactForm({setEmailSent} : contactProps) {
  
  const form = useRef<any>()
  const {language} = useGlobalLanguage();
  const langSelector = (a : string, b : string) => language==='EN' ? a : b

  async function sendEmail (e : React.SyntheticEvent) {
    e.preventDefault()
    const response = await emailjs.sendForm('service_zg1rkys', 'template_aop493t', form.current, 'vnRNacXRndOgMysFO')
    console.log(response)
    if(response.status === 200) {
      setEmailSent(true)
    }else{
      alert("El email no pudo ser enviado, intenta nuevamente.")
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
        <label form="email-contact" className='submit-lbl'> <input type="submit" value={langSelector('Send', 'Enviar')}/> </label>
      </form>
    </div>
  )
}

export default ContactForm