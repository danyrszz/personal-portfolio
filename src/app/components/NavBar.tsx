'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useGlobalLanguage } from '../context/LanguageContext'
import './Nav.css'

export default function NavBar(){

  const path = usePathname()
  const {language, setLanguage} = useGlobalLanguage()

  return(
    <main className='nav-container'>
      <section className='nav-element nav-links'>
        <Link href="/" className={path==='/'?' selected' : ''}>{language==='EN' ? 'Home' : 'Inicio'}</Link>
        <Link href="/projects" className={path==='/projects'?' selected' : ''}>{language==='EN' ? 'Projects' : 'Proyectos'}</Link>
        <Link href="/contact" className={path==='/contact'?' selected' : ''}>{language==='EN' ? 'Contact' : 'Contacto'}</Link>
      </section>

      <section className='nav-element nav-lang'>

        <div className={ (language==='ES'? 'selected ' : '') + "lang-button"} onClick={()=>setLanguage('ES')}>
          <div className="image-icon mx"></div>
          <span>Es</span>
        </div>

        <div className={ (language==='EN'? 'selected ' : '') + "lang-button"} onClick={()=>setLanguage('EN')}>
          <div className="image-icon us"></div>
          <span>En</span>
        </div>

      </section>
    </main>
  )
}