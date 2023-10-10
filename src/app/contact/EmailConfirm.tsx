import React from 'react'
import '../contact/contact.css'
import { useGlobalLanguage } from '../context/LanguageContext'

function EmailConfirm() {
  return (
    <div className='confirmation-message'>
      <h1>¡Gracias por ponerte en contacto!</h1>
      <p>He recibido tu mensaje.</p>
      <p>Te responderé tan pronto como me sea posible. </p>
      <img src="/bottle.jpg" alt="" className='confirmation-image' />
    </div>
  )
}

export default EmailConfirm
