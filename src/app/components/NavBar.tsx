'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './Nav.css'

export default function NavBar(){

  const path = usePathname()

  console.log(path)

  return(
    <main className='nav-container'>
      <section className='nav-element nav-links'>
        <Link href="/" className={path==='/'?' selected' : ''}>Inicio</Link>
        <Link href="/projects" className={path==='/projects'?' selected' : ''}>Proyectos</Link>
        <Link href="/contact" className={path==='/contact'?' selected' : ''}>Contacto</Link>
      </section>

      <section className='nav-element nav-lang'>

        <div className="lang-button">
          <div className="image-icon mx"></div>
          <span>Es</span>
        </div>

        <div className="lang-button selected">
          <div className="image-icon us"></div>
          <span>En</span>
        </div>

      </section>
    </main>
  )
}