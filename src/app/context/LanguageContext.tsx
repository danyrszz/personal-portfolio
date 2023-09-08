'use client'

import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface ContextProps {
  language : string,
  setLanguage : Dispatch<SetStateAction<string>>
}

const GlobalLanguage = createContext<ContextProps>({
  language : "ES",
  setLanguage : ()=>'',
});

export default function LanguageContext ({children} : {children : React.ReactNode}){

  const [language, setLanguage] = useState<string>('ES')

  return (
    <GlobalLanguage.Provider value={{language, setLanguage}}>
      {children}
    </GlobalLanguage.Provider>
  )
}

export const useGlobalLanguage = () => useContext(GlobalLanguage);