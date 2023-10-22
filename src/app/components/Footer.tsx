import React from 'react'
import { useGlobalLanguage } from '../context/LanguageContext'
import './footer.css'

const Footer = () => {
  const {language} = useGlobalLanguage();
  const langSelector = (a : string ,b : string) => language==='EN' ? a : b

  return (
    <footer className='common-footer'>

      <div className="footer-column">
        <p>
          {langSelector(
          'Made with 💚 using React with Typescript.',
          'Hecho con 💚 usando React con Typescript.')}
        </p>
        {language==="EN" ? footerEn : footerEs}
      </div>
    
    </footer>
  )
}

const footerEn = <p>This site uses <a href='https://marella.me/material-icons/'>Material Icons</a> and <a href='https://www.emailjs.com/'>EmailJS</a> service. Created by Daniel Ramírez.</p>
const footerEs = <p>Este sitio usa algunos <a href='https://marella.me/material-icons/'>Material Icons</a> y el servicio de <a href='https://www.emailjs.com/'>EmailJS.</a> Creado por Daniel Ramírez.</p>

export default Footer
