// import React from 'react'
// import '../contact/contact.css'
// import { useGlobalLanguage } from '../context/LanguageContext'

// function ContactForm() {
//   const {language} = useGlobalLanguage();
//   const langSelector = (a : string ,b : string) => language==='EN' ? a : b

//   return (
//     <div className='form-container'>
//       <form name='email-contact' className='contact-form' onSubmit={e=>sendEmail(e)}>
//         <label form="email-contact"> <input type="text" name="name" value={name} onChange={ e=> setName(e.target.value)}  placeholder={langSelector('Your name', 'Tu nombre')} required /> </label> 
//         <label form="email-contact"> <input type="email" name="email" value={email} onChange={e=> setEmail(e.target.value)} placeholder={langSelector('yourmail@domain.com', 'tucorreo@dominio.com')} required/> </label> 
//         <label form="email-contact"> <textarea name="message" value={message} onChange={e=> setMessage(e.target.value)} placeholder={langSelector('Tell me something', 'Cuéntame lo que necesitas')} required></textarea> </label>
//         <span className='info-tag'>
//           {langSelector('*All fields required', '*Todos los campos son requeridos')}
//         </span>
//         <label form="email-contact" className='submit-lbl'> <input type="submit" value={langSelector('Send', 'Enviar')}/> </label>
//       </form>
//     </div>
//   )
// }

// export default ContactForm
