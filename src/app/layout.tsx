import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import NavBar from './components/NavBar'
import LanguageContext from './context/LanguageContext'

export const metadata: Metadata = {
  title: 'Portafolio de Daniel',
  description: 'Portafolio de proyectos personales.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageContext>
          <NavBar/>
          {children}
        </LanguageContext>
      </body>
    </html>
  )
}
