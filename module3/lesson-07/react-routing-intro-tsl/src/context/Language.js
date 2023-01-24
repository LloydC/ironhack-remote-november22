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
export function LanguageProvider(props) {
    const [userLanguage, setUserLanguage] = useState('en');
  
    const userLanguageChange = selected => {
      const newLanguage = languageOptions[selected] ? selected : 'en'
      setUserLanguage(newLanguage);
    }

    const provider = {
      userLanguage,
      dictionary: dictionaryList[userLanguage],
      userLanguageChange 
    };
  
    return (
      <LanguageContext.Provider value={provider}>
        {props.children}
      </LanguageContext.Provider>
    );
  };