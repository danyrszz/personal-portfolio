'use client'
import './contact.css'
import Footer from '../components/Footer'
import ContactForm from './ContactForm'
import EmailConfirm from './EmailConfirm'
import { useGlobalLanguage } from '../context/LanguageContext'
import { useState } from 'react';

export default function Contact() {
  const {language} = useGlobalLanguage();
  const langSelector = (a : string ,b : string) => language==='EN' ? a : b
  const [emailSent, setEmailSent] = useState<boolean>(false)

  return (
    <>
    <div className='common-title title-white title-decorated title-centered bg-deep-blue'> {langSelector('Reach me out.','Contáctame.')} </div>
    <section className='contact-main'>
      { !emailSent && <ContactForm setEmailSent = {setEmailSent} /> || <EmailConfirm /> }
    </section>
    <Footer/>
    </>
  )
}

