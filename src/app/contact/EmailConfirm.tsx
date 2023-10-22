import React from 'react'
import '../contact/contact.css'
import { useGlobalLanguage } from '../context/LanguageContext'

interface contactProps {setEmailSent : Function}
function EmailConfirm({setEmailSent} : contactProps) {

  const {language} = useGlobalLanguage()
  const langSelector = (a : string, b : string) => language==='EN' ? a : b

  return (
    <>
      <div className='confirmation-message'>
        <h1>{langSelector('Thanks for contacting me!', '¡Gracias por ponerte en contacto!')}</h1>
        <p>{langSelector(`I've got your message.`, `He recibido tu mensaje.`)}</p>
        <p>{langSelector(`I'll reply you as soon as possible.`,`Te responderé tan pronto como me sea posible.`)} </p>
        <img src="/bottle.jpg" alt="" className='confirmation-image' />
      </div>
      <span className='form-go-back' onClick={()=>setEmailSent(false)}> {langSelector('Go back', 'Volver')} </span>
    </>
  )
}

export default EmailConfirm
