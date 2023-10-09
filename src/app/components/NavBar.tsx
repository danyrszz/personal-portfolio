'use client'
import {useState} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useGlobalLanguage } from '../context/LanguageContext'
import './Nav.css'
import 'material-icons/iconfont/filled.css';


export default function NavBar(){

  const [navBarVisible, setNavBarVisible] = useState(false)
  const path = usePathname()
  const {language, setLanguage} = useGlobalLanguage()

  return(
    <>

    <div className='burger-menu nav-container' onClick={()=>setNavBarVisible(!navBarVisible)}>
      <span className='material-icons'>menu</span>
    </div>

    <div className={`nav-container mobile-nav ${navBarVisible? 'mobile-nav-on':'mobile-nav-off'}`} >

        <div className='mobile-close burger-menu nav-container' onClick={()=>setNavBarVisible(!navBarVisible)}>
          <span className='material-icons'>close</span>
        </div>

        <section className='nav-element nav-links' onClick={()=>setNavBarVisible(!navBarVisible)} >
          <Link href="/" className={path==='/'?' selected' : ''}>{language==='EN' ? 'Home' : 'Inicio'}</Link>
          <Link href="/projects" className={path==='/projects'?' selected' : ''}>{language==='EN' ? 'Projects' : 'Proyectos'}</Link>
          <Link href="/contact" className={path==='/contact'?' selected' : ''}>{language==='EN' ? 'Contact' : 'Contacto'}</Link>
        </section>

        <section className='nav-element nav-lang' onClick={()=>setNavBarVisible(!navBarVisible)}>
          <div className={ (language==='ES'? 'selected ' : '') + "lang-button"} onClick={()=>setLanguage('ES')}>
            <div className="image-icon mx"></div>
            <span>Es</span>
          </div>

          <div className={ (language==='EN'? 'selected ' : '') + "lang-button"} onClick={()=>setLanguage('EN')}>
            <div className="image-icon us"></div>
            <span>En</span>
          </div>
        </section>
    </div>
    </>
  )
}