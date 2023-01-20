import { useState, createContext, useContext } from 'react';

import { languageOptions, dictionaryList } from '../languages';

export const LanguageContext = createContext({
    userLanguage: 'en',
    dictionary: dictionaryList.en
  });
  
  // get text according to id & current language
export function Text({ tid }) {
    const languageContext = useContext(LanguageContext);
  
    return languageContext.dictionary[tid] || tid;
  };
  

  // it provides the language context to app
export function LanguageProvider({ children }) {
    const [userLanguage, setUserLanguage] = useState('en');
  
    const provider = {
      userLanguage,
      dictionary: dictionaryList[userLanguage],
      userLanguageChange: selected => {
        const newLanguage = languageOptions[selected] ? selected : 'en'
        setUserLanguage(newLanguage);
      }
    };
  
    return (
      <LanguageContext.Provider value={provider}>
        {children}
      </LanguageContext.Provider>
    );
  };